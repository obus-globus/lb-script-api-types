import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockFace$EnumAxis extends Enum<BlockFace$EnumAxis> {
    static X: BlockFace$EnumAxis;
    static Y: BlockFace$EnumAxis;
    static Z: BlockFace$EnumAxis;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BlockFace$EnumAxis;
    static values(): BlockFace$EnumAxis[];
    private constructor()
    name(): "X" | "Y" | "Z";
}