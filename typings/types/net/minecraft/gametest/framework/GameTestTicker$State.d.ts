import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GameTestTicker$State extends Enum<GameTestTicker$State> {
    static HALTING: GameTestTicker$State;
    static IDLE: GameTestTicker$State;
    static RUNNING: GameTestTicker$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GameTestTicker$State;
    static values(): GameTestTicker$State[];
    private constructor()
    name(): "IDLE" | "RUNNING" | "HALTING";
}