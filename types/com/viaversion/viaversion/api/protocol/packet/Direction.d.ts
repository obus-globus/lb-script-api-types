import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Direction extends Enum<Direction> {
    static CLIENTBOUND: Direction;
    static SERVERBOUND: Direction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Direction;
    static values(): (Object | null)[];
    private constructor()
    name(): "CLIENTBOUND" | "SERVERBOUND";
}