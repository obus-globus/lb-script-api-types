import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockFace$EnumAxis extends Enum<BlockFace$EnumAxis> {
    static X: BlockFace$EnumAxis;
    static Y: BlockFace$EnumAxis;
    static Z: BlockFace$EnumAxis;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BlockFace$EnumAxis;
    static values(): (Object | null)[];
    private constructor()
    name(): "X" | "Y" | "Z";
}