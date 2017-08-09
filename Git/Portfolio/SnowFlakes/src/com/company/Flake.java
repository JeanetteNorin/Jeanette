package com.company;

import com.googlecode.lanterna.terminal.Terminal;
import java.util.Random;

public class Flake {

    Terminal terminal;
    public int x;
    public int y;

    public Flake(int x, int y, Terminal terminal) {
        this.x = x;
        this.y = y;
        this.terminal = terminal;
    } //end of constructor

    public void drawSnowflake() {
        terminal.moveCursor(x,y);
        terminal.putCharacter(' '); //remove character from prev pos
        y++; //move pos up
        terminal.moveCursor(x,y);
        terminal.putCharacter('O'); //put character in new pos
        if (y == 0){
            terminal.putCharacter(' ');
            terminal.clearScreen();
        }
    } //end of draw

    public static int setX() {
        Random rand = new Random();
        int max = 100;
        int min = 0;
        int randomNum = rand.nextInt((max - min) + 1) + min;
        return randomNum;
    } //end of setX
} //end of class
