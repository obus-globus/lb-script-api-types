import type { SurfaceConfig } from '../../../../../com/seedfinding/mcbiome/biome/surface/SurfaceConfig.d.ts'
import type { SurfaceBuilder } from '../../../../../com/seedfinding/mcbiome/biome/surface/builder/SurfaceBuilder.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SurfaceBuilders extends Object {
    static BADLANDS: (param0: SurfaceConfig) => SurfaceBuilder;
    static BASALT_DELTAS: (param0: SurfaceConfig) => SurfaceBuilder;
    static DEFAULT: (param0: SurfaceConfig) => SurfaceBuilder;
    static ERODED_BADLANDS: (param0: SurfaceConfig) => SurfaceBuilder;
    static FROZEN_OCEAN: (param0: SurfaceConfig) => SurfaceBuilder;
    static GIANT_TREE_TAIGA: (param0: SurfaceConfig) => SurfaceBuilder;
    static GRAVELLY_MOUNTAIN: (param0: SurfaceConfig) => SurfaceBuilder;
    static MOUNTAIN: (param0: SurfaceConfig) => SurfaceBuilder;
    static NETHER: (param0: SurfaceConfig) => SurfaceBuilder;
    static NETHER_FOREST: (param0: SurfaceConfig) => SurfaceBuilder;
    static NOPE: (param0: SurfaceConfig) => SurfaceBuilder;
    static SHATTERED_SAVANNA: (param0: SurfaceConfig) => SurfaceBuilder;
    static SOUL_SAND_VALLEY: (param0: SurfaceConfig) => SurfaceBuilder;
    static SURFACE_BUILDERS: { [key: string]: (param0: SurfaceConfig) => SurfaceBuilder };
    static SWAMP: (param0: SurfaceConfig) => SurfaceBuilder;
    static WOODED_BADLANDS: (param0: SurfaceConfig) => SurfaceBuilder;
    static register(paramarg0: string, paramarg1: (param0: SurfaceConfig) => SurfaceBuilder): (param0: SurfaceConfig) => SurfaceBuilder;
    constructor()
}