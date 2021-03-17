import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import Entypo from "@expo/vector-icons/Entypo"
import styles from '../style/style'




    

export default function Gameboard(){

    const START = 'plus';
const CROSS = 'cross';
const CIRCLE = 'circle';
let initialBoard = [
            START, START, START, START, START,
            START, START, START, START, START, 
            START, START, START, START, START,
            START, START, START, START, START,
            START, START, START, START, START,];

    const [isCross, setCross] = useState(true);
    const [winner, setWinner] = useState("");
    const [board, setBoard] = useState(initialBoard);
    const[bombs, setBombs] = useState(15); 
     
    function winGame() {
        if (board[0] != START && board[0] == board[1] && board[1] == board[2]){
            return board[0]
        }else if (board[3] != START && board[3] == board[4] && board[4] == board[5]){
            return board[3]
        }else if (board[6] != START && board[6] == board[7] && board[7] == board[8]){
            return board[6]
        }else if(board[0] != START && board[0] == board[3] && board[3] == board[6]){
            return board[0]
        }else if(board[1] != START && board[1] == board[4] && board[4] == board[7]){
            return board[1]
        }else if (board[2] != START && board[2] == board[5] && board[5] == board[8]){
            return board[2]
        }else if(board[0] != START && board[0] == board[4] && board[4] == board[8]){
            return board[0]
        }else if(board[0] != START && board[0] == board[4] && board[4] == board[8]){
            return board[0]
        }else if (board[2] != START && board[2] == board[4] && board[4] == board[6]){
            return board[2]
        }else {
            return ""
        }
    }
    function drawItem(number) {
        setBombs -1;
        if (board[number] === START && winGame() === "") {
            board[number] = isCross ? CROSS : CIRCLE;
            setCross(!isCross);
            if (winGame() !== "") {
                setWinner(winGame());
            }
            else if (board.indexOf(START) === -1) {
                setWinner('No winner');
            }
        }
    }
    function chooseItemColor(number) {
        if (board[number] === CROSS) {
            return "#FF3031"
        }
        else if (board[number] === CIRCLE) {
            return "#45CE30"
        }
        else {
            return "#74B9FF"
        }
    }
    function resetGame() {
        setCross(true);
        setWinner('');
        initialBoard = [
            START, START, START, START, START,
            START, START, START, START, START, 
            START, START, START, START, START,
            START, START, START, START, START,
            START, START, START, START, START,
            ];
            setBoard(initialBoard);
    }
        return (
            <View style={styles.gameboard}>
                <View style={styles.flex}>
                    <Pressable key={0} style={styles.row} onPress={() => drawItem(0)}>
                        <Entypo key={0} name={board[0]} size={32} color={chooseItemColor(0)} />
                    </Pressable>
                    <Pressable key={1} style={styles.row} onPress={() => drawItem(1)}>
                        <Entypo key={1} name={board[1]} size={32} color={chooseItemColor(1)} />
                    </Pressable>
                    <Pressable key={2} style={styles.row} onPress={() => drawItem(2)}>
                        <Entypo key={2} name={board[2]} size={32} color={chooseItemColor(2)} />
                    </Pressable>
                    <Pressable key={3} style={styles.row} onPress={() => drawItem(3)}>
                        <Entypo key={3} name={board[3]} size={32} color={chooseItemColor(3)} />
                    </Pressable>
                    <Pressable key={4} style={styles.row} onPress={() => drawItem(4)}>
                        <Entypo key={4} name={board[4]} size={32} color={chooseItemColor(4)} />
                    </Pressable>
                </View>
               <View style={styles.flex}>
               <Pressable key={5} style={styles.row} onPress={() => drawItem(5)}>
                        <Entypo key={5} name={board[5]} size={32} color={chooseItemColor(5)} />
                    </Pressable>
                    <Pressable key={6} style={styles.row} onPress={() => drawItem(6)}>
                        <Entypo key={6} name={board[6]} size={32} color={chooseItemColor(6)} />
                    </Pressable>
                    <Pressable key={7} style={styles.row} onPress={() => drawItem(7)}>
                        <Entypo key={7} name={board[7]} size={32} color={chooseItemColor(7)} />
                    </Pressable>
                    <Pressable key={8} style={styles.row} onPress={() => drawItem(8)}>
                        <Entypo key={8} name={board[8]} size={32} color={chooseItemColor(8)} />
                    </Pressable>
                    <Pressable key={9} style={styles.row} onPress={() => drawItem(9)}>
                        <Entypo key={9} name={board[9]} size={32} color={chooseItemColor(9)} />
                    </Pressable>
               </View>
               <View style={styles.flex}>
                    <Pressable key={10} style={styles.row} onPress={() => drawItem(10)}>
                        <Entypo key={10} name={board[10]} size={32} color={chooseItemColor(10)} />
                    </Pressable>
                    <Pressable key={11} style={styles.row} onPress={() => drawItem(11)}>
                        <Entypo key={11} name={board[11]} size={32} color={chooseItemColor(11)} />
                    </Pressable>
                    <Pressable key={12} style={styles.row} onPress={() => drawItem(12)}>
                        <Entypo key={12} name={board[12]} size={32} color={chooseItemColor(12)} />
                    </Pressable>
                    <Pressable key={13} style={styles.row} onPress={() => drawItem(13)}>
                        <Entypo key={13} name={board[13]} size={32} color={chooseItemColor(13)} />
                    </Pressable>
                    <Pressable key={14} style={styles.row} onPress={() => drawItem(14)}>
                        <Entypo key={14} name={board[14]} size={32} color={chooseItemColor(14)} />
                    </Pressable>
               </View>
               <View style={styles.flex}>
                    <Pressable key={15} style={styles.row} onPress={() => drawItem(15)}>
                        <Entypo key={15} name={board[15]} size={32} color={chooseItemColor(15)} />
                    </Pressable>
                    <Pressable key={16} style={styles.row} onPress={() => drawItem(16)}>
                        <Entypo key={16} name={board[16]} size={32} color={chooseItemColor(16)} />
                    </Pressable>
                    <Pressable key={17} style={styles.row} onPress={() => drawItem(17)}>
                        <Entypo key={17} name={board[17]} size={32} color={chooseItemColor(17)} />
                    </Pressable>
                    <Pressable key={18} style={styles.row} onPress={() => drawItem(18)}>
                        <Entypo key={18} name={board[18]} size={32} color={chooseItemColor(18)} />
                    </Pressable>
                    <Pressable key={19} style={styles.row} onPress={() => drawItem(19)}>
                        <Entypo key={19} name={board[19]} size={32} color={chooseItemColor(19)} />
                    </Pressable>
               </View>
               <View style={styles.flex}>
                    <Pressable key={20} style={styles.row} onPress={() => drawItem(20)}>
                        <Entypo key={20} name={board[20]} size={32} color={chooseItemColor(20)} />
                    </Pressable>
                    <Pressable key={21} style={styles.row} onPress={() => drawItem(21)}>
                        <Entypo key={21} name={board[21]} size={32} color={chooseItemColor(21)} />
                    </Pressable>
                    <Pressable key={22} style={styles.row} onPress={() => drawItem(22)}>
                        <Entypo key={22} name={board[22]} size={32} color={chooseItemColor(22)} />
                    </Pressable>
                    <Pressable key={23} style={styles.row} onPress={() => drawItem(23)}>
                        <Entypo key={23} name={board[23]} size={32} color={chooseItemColor(23)} />
                    </Pressable>
                    <Pressable key={24} style={styles.row} onPress={() => drawItem(24)}>
                        <Entypo key={24} name={board[24]} size={32} color={chooseItemColor(24)} />
                    </Pressable>
               </View>
               
               <Pressable style={styles.button} onPress={ () =>resetGame()}>
                   <Text style={styles.buttonText}>New Game</Text>
               </Pressable>
               <Text style={styles.gameinfo}>Time remaining: ∞ </Text>
               <Text style={styles.gameinfo}>Bombs: {bombs} , Hits: ? , Ships: ? </Text>
               <Text style={styles.gameinfo}>Status: Game is being played </Text>
            </View>
        )
}