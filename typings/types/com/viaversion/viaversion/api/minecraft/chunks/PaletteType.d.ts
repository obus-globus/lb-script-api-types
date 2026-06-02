import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PaletteType extends Enum<PaletteType> {
    static BIOMES: PaletteType;
    static BLOCKS: PaletteType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PaletteType;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number)
    // private highestBitsPerValue: number;
    // private size: number;
    highestBitsPerValue(): number;
    size(): number;
    name(): "BLOCKS" | "BIOMES";
}