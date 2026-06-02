import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GameTestTicker$State extends Enum<GameTestTicker$State> {
    static HALTING: GameTestTicker$State;
    static IDLE: GameTestTicker$State;
    static RUNNING: GameTestTicker$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GameTestTicker$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "IDLE" | "RUNNING" | "HALTING";
}