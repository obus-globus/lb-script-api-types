import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Biome$Category extends Enum<Biome$Category> {
    static BADLANDS_PLATEAU: Biome$Category;
    static BEACH: Biome$Category;
    static DESERT: Biome$Category;
    static EXTREME_HILLS: Biome$Category;
    static FOREST: Biome$Category;
    static ICY: Biome$Category;
    static JUNGLE: Biome$Category;
    static MESA: Biome$Category;
    static MUSHROOM: Biome$Category;
    static NETHER: Biome$Category;
    static NONE: Biome$Category;
    static OCEAN: Biome$Category;
    static PLAINS: Biome$Category;
    static RIVER: Biome$Category;
    static SAVANNA: Biome$Category;
    static SWAMP: Biome$Category;
    static TAIGA: Biome$Category;
    static THE_END: Biome$Category;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Biome$Category;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly name: string;
    getName(): string;
    name(): "NONE" | "TAIGA" | "EXTREME_HILLS" | "JUNGLE" | "MESA" | "BADLANDS_PLATEAU" | "PLAINS" | "SAVANNA" | "ICY" | "THE_END" | "BEACH" | "FOREST" | "OCEAN" | "DESERT" | "RIVER" | "SWAMP" | "MUSHROOM" | "NETHER";
}