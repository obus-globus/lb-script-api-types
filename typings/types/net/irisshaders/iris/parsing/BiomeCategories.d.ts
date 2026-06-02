import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BiomeCategories extends Enum<BiomeCategories> {
    static BEACH: BiomeCategories;
    static DESERT: BiomeCategories;
    static EXTREME_HILLS: BiomeCategories;
    static FOREST: BiomeCategories;
    static ICY: BiomeCategories;
    static JUNGLE: BiomeCategories;
    static MESA: BiomeCategories;
    static MOUNTAIN: BiomeCategories;
    static MUSHROOM: BiomeCategories;
    static NETHER: BiomeCategories;
    static NONE: BiomeCategories;
    static OCEAN: BiomeCategories;
    static PLAINS: BiomeCategories;
    static RIVER: BiomeCategories;
    static SAVANNA: BiomeCategories;
    static SWAMP: BiomeCategories;
    static TAIGA: BiomeCategories;
    static THE_END: BiomeCategories;
    static UNDERGROUND: BiomeCategories;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BiomeCategories;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "TAIGA" | "EXTREME_HILLS" | "JUNGLE" | "MESA" | "PLAINS" | "SAVANNA" | "ICY" | "THE_END" | "BEACH" | "FOREST" | "OCEAN" | "DESERT" | "RIVER" | "SWAMP" | "MUSHROOM" | "NETHER" | "MOUNTAIN" | "UNDERGROUND";
}