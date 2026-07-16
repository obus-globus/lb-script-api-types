import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MovePlayerFlag extends Enum<MovePlayerFlag> {
    static HORIZONTAL_COLLISION: MovePlayerFlag;
    static ON_GROUND: MovePlayerFlag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MovePlayerFlag;
    static values(): MovePlayerFlag[];
    private constructor()
    getBit(): number;
    name(): "ON_GROUND" | "HORIZONTAL_COLLISION";
}