import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ArrayLightDataCache } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/ArrayLightDataCache.d.ts'
import type { BlockRenderer } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/BlockRenderer.d.ts'
import type { FluidRenderer } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/FluidRenderer.d.ts'
import type { LevelSlice } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { ChunkRenderContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ChunkRenderContext.d.ts'
import type { Minecraft } from '../../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockStateModelSet } from '../../../../../../../../../net/minecraft/client/renderer/block/BlockStateModelSet.d.ts'
export class BlockRenderCache extends Object {
    constructor(arg0: Minecraft, arg1: ClientLevel)
    readonly blockModels: BlockStateModelSet;
    readonly blockRenderer: BlockRenderer;
    readonly fluidRenderer: FluidRenderer;
    // private levelSlice: LevelSlice;
    // private lightDataCache: ArrayLightDataCache;
    cleanup(): void;
    getBlockModels(): BlockStateModelSet;
    getBlockRenderer(): BlockRenderer;
    getFluidRenderer(): FluidRenderer;
    getWorldSlice(): LevelSlice;
    init(arg0: ChunkRenderContext): void;
}