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

            valid = board.isMovable(square);

            if (valid) moves.push(square);
        }

        return moves;
    }

    getMovesInDirections(board, directions) {
        const currentSquare = board.findPiece(this);

        const moves = directions.flatMap(([dx, dy]) => this.getMovesInDirection(board, currentSquare, dx, dy));

        return moves;
    }

    filterMoves(board, directions) {
        const { row: startRow, col: startCol } = board.findPiece(this);

        const moves = directions.map(([dx, dy]) => Square.at(startRow + dx, startCol + dy))
        const availableMoves = moves.filter(square => board.isMovable(square));
        return availableMoves;
    }

    getRotatedDirections(...directions) {
        return directions.flatMap(([dx, dy]) => [
            [dx, dy],
            [-dy, dx],
            [-dx, -dy],
            [dy, -dx]
        ]);
    }
}
