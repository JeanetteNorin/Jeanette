package com.company;
import com.googlecode.lanterna.TerminalFacade;
import com.googlecode.lanterna.terminal.Terminal;
import java.nio.charset.Charset;
import com.googlecode.lanterna.input.Key;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) throws InterruptedException {
        Terminal terminal = TerminalFacade.createTerminal(System.in, System.out, Charset.forName("UTF8"));
        terminal.enterPrivateMode();

        List<Flake> flakes = new ArrayList<>();
        boolean gameRunning = true;
        Key key;
        int timeCount = 0;
        terminal.setCursorVisible(false);

        while(gameRunning) {
            do {
            //sleep before continuing while loop
                try {
                    Thread.sleep(5);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                key = terminal.readInput();

                timeCount++;
                if (timeCount % 30 == 0) {
                    //create new flake
                    Flake snowFlake = new Flake(Flake.setX(), 0, terminal);
                    //add new flakes to list
                    flakes.add(snowFlake);
                    //go through list, draw, change y
                    int numberOfFlakes = flakes.size();
                    for (int i = 0; i < numberOfFlakes; i++) {
                        Flake flake = flakes.get(i); //get index of current flake in list
                        flake.drawSnowflake(); //method for printing to terminal & change pos for next time
                    }
                }
            }
            while(key ==null);
            }//end of game loop
    }//end of main
} //end of class

