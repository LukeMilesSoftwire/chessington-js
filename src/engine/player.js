const Player = Object.freeze({
    WHITE: Symbol('white'),
    BLACK: Symbol('black'),

    direction: player => player === Player.WHITE ? 1 : -1
});

export default Player;
