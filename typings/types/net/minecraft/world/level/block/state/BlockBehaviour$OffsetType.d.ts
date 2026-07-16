import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BlockBehaviour$OffsetType extends Enum<BlockBehaviour$OffsetType> {
    static NONE: BlockBehaviour$OffsetType;
    static XYZ: BlockBehaviour$OffsetType;
    static XZ: BlockBehaviour$OffsetType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BlockBehaviour$OffsetType;
    static values(): BlockBehaviour$OffsetType[];
    private constructor()
    name(): "NONE" | "XZ" | "XYZ";
}