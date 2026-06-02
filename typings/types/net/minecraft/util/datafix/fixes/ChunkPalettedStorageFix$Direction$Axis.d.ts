import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ChunkPalettedStorageFix$Direction$Axis extends Enum<ChunkPalettedStorageFix$Direction$Axis> {
    static X: ChunkPalettedStorageFix$Direction$Axis;
    static Y: ChunkPalettedStorageFix$Direction$Axis;
    static Z: ChunkPalettedStorageFix$Direction$Axis;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChunkPalettedStorageFix$Direction$Axis;
    static values(): (Object | null)[];
    private constructor()
    name(): "X" | "Y" | "Z";
}