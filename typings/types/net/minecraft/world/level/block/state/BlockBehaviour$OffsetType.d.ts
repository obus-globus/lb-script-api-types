import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BlockBehaviour$OffsetType extends Enum<BlockBehaviour$OffsetType> {
    static NONE: BlockBehaviour$OffsetType;
    static XYZ: BlockBehaviour$OffsetType;
    static XZ: BlockBehaviour$OffsetType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BlockBehaviour$OffsetType;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "XZ" | "XYZ";
}