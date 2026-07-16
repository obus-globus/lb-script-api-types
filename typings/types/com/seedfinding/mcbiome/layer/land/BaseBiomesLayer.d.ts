import type { Biome } from '../../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { IntBiomeLayer } from '../../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { MCVersion } from '../../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
export class BaseBiomesLayer extends IntBiomeLayer {
    static COOL_BIOMES: Biome[];
    static DRY_BIOMES: Biome[];
    static OLD_BIOMES: Biome[];
    static OLD_BIOMES_DEFAULT_1_1: Biome[];
    static SNOWY_BIOMES: Biome[];
    static TEMPERATE_BIOMES: Biome[];
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion, arg1: number, arg2: number, arg3: IntBiomeLayer)
    useDefault1_1: boolean;
    sample(arg0: number, arg1: number, arg2: number): number;
    sample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number[];
    // private sampleOld(arg0: number): number;
    setDefault1_1(arg0: boolean): BaseBiomesLayer;
}