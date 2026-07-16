import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ChunkPalettedStorageFix$Direction$AxisDirection extends Enum<ChunkPalettedStorageFix$Direction$AxisDirection> {
    static NEGATIVE: ChunkPalettedStorageFix$Direction$AxisDirection;
    static POSITIVE: ChunkPalettedStorageFix$Direction$AxisDirection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChunkPalettedStorageFix$Direction$AxisDirection;
    static values(): ChunkPalettedStorageFix$Direction$AxisDirection[];
    private constructor(step: number)
    readonly step: number;
    getStep(): number;
    name(): "POSITIVE" | "NEGATIVE";
}