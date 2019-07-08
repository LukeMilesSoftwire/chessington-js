import Square from '../square';

export default class Piece {
    constructor(player) {
        this.player = player;
        this.hasMoved = false;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.hasMoved = true;
    }

    getMovesInDirection(board, { row: curRow, col: curCol }, dx, dy) {
        const moves = [];

        let valid = true;
        while (valid) {
            curRow += dy;
            curCol += dx;

            const square = Square.at(curRow, curCol);

            valid = board.isOnBoard(square) && !board.getPiece(square);

            if (valid) moves.push(square);
        }

        return moves;
    }

    getMovesInDirections(board, directions) {
        const currentSquare = board.findPiece(this);

        const moves = directions.flatMap(([dx, dy]) => this.getMovesInDirection(board, currentSquare, dx, dy));

        return moves;
    }
}
