import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class BetaBiome extends Enum<BetaBiome> {
    static DESERT: BetaBiome;
    static FOREST: BetaBiome;
    static HELL: BetaBiome;
    static ICE_DESERT: BetaBiome;
    static PLAINS: BetaBiome;
    static RAINFOREST: BetaBiome;
    static SAVANNA: BetaBiome;
    static SEASONAL_FOREST: BetaBiome;
    static SHRUBLAND: BetaBiome;
    static SKY: BetaBiome;
    static SWAMPLAND: BetaBiome;
    static TAIGA: BetaBiome;
    static TUNDRA: BetaBiome;
    static getBiome(paramarg0: number, paramarg1: number): BetaBiome;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BetaBiome;
    static values(): BetaBiome[];
    private constructor()
    name(): "RAINFOREST" | "SWAMPLAND" | "SEASONAL_FOREST" | "FOREST" | "SAVANNA" | "SHRUBLAND" | "TAIGA" | "DESERT" | "PLAINS" | "ICE_DESERT" | "TUNDRA" | "HELL" | "SKY";
}