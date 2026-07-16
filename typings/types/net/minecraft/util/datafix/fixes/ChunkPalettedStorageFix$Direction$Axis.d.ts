import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ChunkPalettedStorageFix$Direction$Axis extends Enum<ChunkPalettedStorageFix$Direction$Axis> {
    static X: ChunkPalettedStorageFix$Direction$Axis;
    static Y: ChunkPalettedStorageFix$Direction$Axis;
    static Z: ChunkPalettedStorageFix$Direction$Axis;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChunkPalettedStorageFix$Direction$Axis;
    static values(): ChunkPalettedStorageFix$Direction$Axis[];
    private constructor()
    name(): "X" | "Y" | "Z";
}