import type { BlockFace$EnumAxis } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockFace$EnumAxis.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlockFace extends Enum<BlockFace> {
    static BOTTOM: BlockFace;
    static EAST: BlockFace;
    static NORTH: BlockFace;
    static SOUTH: BlockFace;
    static TOP: BlockFace;
    static WEST: BlockFace;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BlockFace;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number, arg4: number, arg5: BlockFace$EnumAxis)
    // private axis: BlockFace$EnumAxis;
    // private modX: number;
    // private modY: number;
    // private modZ: number;
    axis(): BlockFace$EnumAxis;
    modX(): number;
    modY(): number;
    modZ(): number;
    opposite(): BlockFace;
    name(): "NORTH" | "SOUTH" | "EAST" | "WEST" | "TOP" | "BOTTOM";
}