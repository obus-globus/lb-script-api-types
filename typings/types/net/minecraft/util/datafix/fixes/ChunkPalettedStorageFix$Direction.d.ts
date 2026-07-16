import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ChunkPalettedStorageFix$Direction$Axis } from '../../../../../net/minecraft/util/datafix/fixes/ChunkPalettedStorageFix$Direction$Axis.d.ts'
import type { ChunkPalettedStorageFix$Direction$AxisDirection } from '../../../../../net/minecraft/util/datafix/fixes/ChunkPalettedStorageFix$Direction$AxisDirection.d.ts'
export class ChunkPalettedStorageFix$Direction extends Enum<ChunkPalettedStorageFix$Direction> {
    static DOWN: ChunkPalettedStorageFix$Direction;
    static EAST: ChunkPalettedStorageFix$Direction;
    static NORTH: ChunkPalettedStorageFix$Direction;
    static SOUTH: ChunkPalettedStorageFix$Direction;
    static UP: ChunkPalettedStorageFix$Direction;
    static WEST: ChunkPalettedStorageFix$Direction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChunkPalettedStorageFix$Direction;
    static values(): ChunkPalettedStorageFix$Direction[];
    private constructor(axisDirection: ChunkPalettedStorageFix$Direction$AxisDirection, axis: ChunkPalettedStorageFix$Direction$Axis)
    readonly axis: ChunkPalettedStorageFix$Direction$Axis;
    readonly axisDirection: ChunkPalettedStorageFix$Direction$AxisDirection;
    getAxis(): ChunkPalettedStorageFix$Direction$Axis;
    getAxisDirection(): ChunkPalettedStorageFix$Direction$AxisDirection;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}