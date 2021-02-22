export class Connect4 {
    round: number = 1;
    finished: string;
    playing: string;
    win: string;
    full: string;
    column: number[][] = [[], [], [], [], [], []];
    checkingLength: number[] = [];

    constructor() {
        this.finished = 'Game has finished!';
        this.playing = `has a turn`;
        this.win = `wins!`;
        this.full = 'Column full!';
        // Good luck
    }

    play(col: number): string {
        // Good luck
        this.checkingLength = this.column.find(element => element.length >= 6);
        // check if there is any column full
        if (this.checkingLength === undefined) {
            // set the round to show which player is playing now
            this.round = (this.round + 1) % 2;
            // push the player's disc to this column
            this.column[col].push(this.round)
            // console.log(this.column)
            // first, check if in the 2d array there are any four discs from one player
            for (let i: number = 0; i < this.column.length; i++) {
                for (let t: number = 0; t < this.column[i].length; t++) {
                    if
                    (
                        (
                            this.column[i][t] === this.round &&
                            this.column[i][t + 1] === this.round &&
                            this.column[i][t + 2] === this.round &&
                            this.column[i][t + 3] === this.round
                        ) || // check vertically
                        (
                            this.column[i][t] === this.round &&
                            this.column[i + 1][t] === this.round &&
                            this.column[i + 2][t] === this.round &&
                            this.column[i + 3][t] === this.round // check horizontally
                        ) ||
                        (
                            this.column[i][t] === this.round &&
                            this.column[i + 1][t + 1] === this.round &&
                            this.column[i + 2][t + 2] === this.round &&
                            this.column[i + 3][t + 3] === this.round
                        ) ||// check diagonally, case 1
                        (
                            this.column[i][t] === this.round &&
                            this.column[i + 1][t - 1] === this.round &&
                            this.column[i + 2][t - 2] === this.round &&
                            this.column[i + 3][t - 3] === this.round
                        )
                    ) {
                        return (`Player ${this.round + 1} ${this.win}`)
                    } else if
                    (
                        (
                            this.column[i][t] === ((this.round + 1) % 2) &&
                            this.column[i][t + 1] === ((this.round + 1) % 2) &&
                            this.column[i][t + 2] === ((this.round + 1) % 2) &&
                            this.column[i][t + 3] === ((this.round + 1) % 2)
                        ) ||
                        (
                            this.column[i][t] === ((this.round + 1) % 2) &&
                            this.column[i + 1][t] === ((this.round + 1) % 2) &&
                            this.column[i + 2][t] === ((this.round + 1) % 2) &&
                            this.column[i + 3][t] === ((this.round + 1) % 2)
                        ) ||
                        (
                            this.column[i][t] === ((this.round + 1) % 2) &&
                            this.column[i + 1][t + 1] === ((this.round + 1) % 2) &&
                            this.column[i + 2][t + 2] === ((this.round + 1) % 2) &&
                            this.column[i + 3][t + 3] === ((this.round + 1) % 2)
                        ) ||
                        (
                            this.column[i][t] === ((this.round + 1) % 2) &&
                            this.column[i + 1][t - 1] === ((this.round + 1) % 2) &&
                            this.column[i + 2][t - 2] === ((this.round + 1) % 2) &&
                            this.column[i + 3][t - 3] === ((this.round + 1) % 2)
                        )
                    ) {
                        // if there are already four discs from the other player, return finished
                        return (this.finished)
                    }
                }
            }
            // nobody wins, continue
            return (`Player ${this.round + 1} ${this.playing}`)
        } else {
            // if find any column full, return column full
            return (this.full)
        }
    }
}