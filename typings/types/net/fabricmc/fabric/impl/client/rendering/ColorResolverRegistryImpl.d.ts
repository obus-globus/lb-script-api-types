import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockTintCache } from '../../../../../../net/minecraft/client/color/block/BlockTintCache.d.ts'
import type { ColorResolver } from '../../../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class ColorResolverRegistryImpl extends Object {
    static createCustomCacheMap(paramarg0: (param0: (param0: Biome, param1: number, param2: number) => number) => BlockTintCache): JavaMap<(param0: Biome, param1: number, param2: number) => number, BlockTintCache>;
    static getAllResolvers(): (param0: Biome, param1: number, param2: number) => number[];
    static getCustomResolvers(): (param0: Biome, param1: number, param2: number) => number[];
    static register(paramarg0: (param0: Biome, param1: number, param2: number) => number): void;
    private constructor()
}