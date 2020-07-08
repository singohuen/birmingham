import setup from "./setup";
import moves from "./moves";

export default {
  seed: 123,
  // The name of the game.
  name: "brass-birmingham",

  // Function that returns the initial value of G.
  // setupData is an optional custom object that is
  // passed through the Game Creation API.
  setup,

  moves: {
    build: moves.build,
    develop: moves.develop,
    loan: moves.loan,
    network: moves.network,
    pass: moves.pass,
    scout: moves.scout,
    sell: moves.sell,
  },

  // // Everything below is OPTIONAL.

  // // Function that allows you to tailor the game state to a specific player.
  // playerView: (G, ctx, playerID) => G,

  // // The seed used by the pseudo-random number generator.
  // seed: 'random-string',

  // turn: {
  //   // The turn order.
  //   order: TurnOrder.DEFAULT,

  //   // Called at the beginning of a turn.
  //   onBegin: (G, ctx) => G,

  //   // Called at the end of a turn.
  //   onEnd: (G, ctx) => G,

  //   // Ends the turn if this returns true.
  //   endIf: (G, ctx) => true,

  //   // Called at the end of each move.
  //   onMove: (G, ctx) => G,

  //   // Ends the turn automatically after a number of moves.
  //   moveLimit: 1,

  //   // Calls setActivePlayers with this as argument at the
  //   // beginning of the turn.
  //   activePlayers: { ... },

  //   stages: {
  //     A: {
  //       // Players in this stage are restricted to moves defined here.
  //       moves: { ... },

  //       // Players in this stage will be moved to the stage specified
  //       // here when the endStage event is called.
  //       next: 'B'
  //     },

  //     ...
  //   },
  // },

  // phases: {
  //   A: {
  //     // Called at the beginning of a phase.
  //     onBegin: (G, ctx) => G,

  //     // Called at the end of a phase.
  //     onEnd: (G, ctx) => G,

  //     // Ends the phase if this returns true.
  //     endIf: (G, ctx) => true,

  //     // Overrides `moves` for the duration of this phase.
  //     moves: { ... },

  //     // Overrides `turn` for the duration of this phase.
  //     turn: { ... },
  //   },

  //   ...
  // },

  // // The minimum and maximum number of players supported
  // // (This is only enforced when using the Lobby server component.)
  // minPlayers: 1,
  // maxPlayers: 4,

  // // Ends the game if this returns anything.
  // // The return value is available in `ctx.gameover`.
  // endIf: (G, ctx) => obj,

  // // Called at the end of the game.
  // // `ctx.gameover` is available at this point.
  // onEnd: (G, ctx) => G,

  // // Disable undo feature for all the moves in the game
  // disableUndo: true,
};
