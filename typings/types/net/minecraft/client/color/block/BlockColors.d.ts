import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockColorsExtension } from '../../../../../net/caffeinemc/mods/sodium/client/model/color/interop/BlockColorsExtension.d.ts'
import type { BlockTintSource } from '../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockColors extends Object implements BlockColorsExtension {
    static LILY_PAD_DEFAULT: number;
    static LILY_PAD_IN_WORLD: number;
    static createDefault(): BlockColors;
    constructor()
    // private blocksToColor: Map<Object, Object>;
    // private overridenBlocks: Object[];
    // private sources: Map<Block, BlockTintSource[]>;
    getColoringProperties(block: Block): Property<any>[];
    getTintSource(state: BlockState, layer: number): BlockTintSource;
    getTintSources(state: BlockState): BlockTintSource[];
    register(layers: BlockTintSource[], ...blocks: Block[]): void;
    sodium$getOverridenVanillaBlocks(): Object[];
    sodium$getProviders(): Map<Object, Object>;
}