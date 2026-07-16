import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PaletteType extends Enum<PaletteType> {
    static BIOMES: PaletteType;
    static BLOCKS: PaletteType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PaletteType;
    static values(): PaletteType[];
    private constructor(arg2: number, arg3: number)
    // private highestBitsPerValue: number;
    // private size: number;
    highestBitsPerValue(): number;
    size(): number;
    name(): "BLOCKS" | "BIOMES";
}