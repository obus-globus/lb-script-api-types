import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Direction extends Enum<Direction> {
    static CLIENTBOUND: Direction;
    static SERVERBOUND: Direction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Direction;
    static values(): Direction[];
    private constructor()
    name(): "CLIENTBOUND" | "SERVERBOUND";
}