import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        const currentSquare = board.findPiece(this);

        const moves = directions.flatMap(([dx, dy]) => this.getMovesInDirection(board, currentSquare, dx, dy));

        return moves;
    }
}
