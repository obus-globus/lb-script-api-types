import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MoverType extends Enum<MoverType> {
    static PISTON: MoverType;
    static PLAYER: MoverType;
    static SELF: MoverType;
    static SHULKER: MoverType;
    static SHULKER_BOX: MoverType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MoverType;
    static values(): (Object | null)[];
    private constructor()
    name(): "SELF" | "PLAYER" | "PISTON" | "SHULKER_BOX" | "SHULKER";
}