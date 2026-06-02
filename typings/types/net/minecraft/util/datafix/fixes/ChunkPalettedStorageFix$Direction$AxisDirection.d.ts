import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ChunkPalettedStorageFix$Direction$AxisDirection extends Enum<ChunkPalettedStorageFix$Direction$AxisDirection> {
    static NEGATIVE: ChunkPalettedStorageFix$Direction$AxisDirection;
    static POSITIVE: ChunkPalettedStorageFix$Direction$AxisDirection;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChunkPalettedStorageFix$Direction$AxisDirection;
    static values(): (Object | null)[];
    private constructor(step: number)
    readonly step: number;
    getStep(): number;
    name(): "POSITIVE" | "NEGATIVE";
}