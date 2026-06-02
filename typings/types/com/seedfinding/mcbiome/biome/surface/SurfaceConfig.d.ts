import type { Block } from '../../../../../com/seedfinding/mccore/block/Block.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SurfaceConfig extends Object {
    static CONFIG_BADLANDS: SurfaceConfig;
    static CONFIG_BASALT_DELTAS: SurfaceConfig;
    static CONFIG_COARSE_DIRT: SurfaceConfig;
    static CONFIG_CRIMSON_FOREST: SurfaceConfig;
    static CONFIG_DESERT: SurfaceConfig;
    static CONFIG_FULL_SAND: SurfaceConfig;
    static CONFIG_GRASS: SurfaceConfig;
    static CONFIG_GRAVEL: SurfaceConfig;
    static CONFIG_HELL: SurfaceConfig;
    static CONFIG_ICE_SPIKES: SurfaceConfig;
    static CONFIG_MYCELIUM: SurfaceConfig;
    static CONFIG_OCEAN_SAND: SurfaceConfig;
    static CONFIG_PODZOL: SurfaceConfig;
    static CONFIG_SOUL_SAND_VALLEY: SurfaceConfig;
    static CONFIG_STONE: SurfaceConfig;
    static CONFIG_THE_END: SurfaceConfig;
    static CONFIG_WARPED_FOREST: SurfaceConfig;
    constructor(arg0: Block, arg1: Block, arg2: Block)
    readonly topBlock: Block;
    readonly underBlock: Block;
    readonly underwaterBlock: Block;
    getTopBlock(): Block;
    getUnderBlock(): Block;
    getUnderwaterBlock(): Block;
    toString(): string;
}