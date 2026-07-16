import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MoverType extends Enum<MoverType> {
    static PISTON: MoverType;
    static PLAYER: MoverType;
    static SELF: MoverType;
    static SHULKER: MoverType;
    static SHULKER_BOX: MoverType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MoverType;
    static values(): MoverType[];
    private constructor()
    name(): "SELF" | "PLAYER" | "PISTON" | "SHULKER_BOX" | "SHULKER";
}