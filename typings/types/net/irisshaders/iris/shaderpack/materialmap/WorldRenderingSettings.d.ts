import type { Object2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkVertexType } from '../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
import type { BlockRenderType } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/BlockRenderType.d.ts'
import type { NamespacedId } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class WorldRenderingSettings extends Object {
    static INSTANCE: WorldRenderingSettings;
    constructor()
    readonly ambientOcclusionLevel: number;
    readonly blockStateIds: Object2IntMap<BlockState>;
    readonly blockTypeIds: Map<Block, BlockRenderType>;
    // private chunkVertexFormat: ChunkVertexType;
    readonly disableDirectionalShading: boolean;
    readonly entityIds: (param0: NamespacedId) => kotlin.Int;
    // private hasVillagerConversionId: boolean;
    readonly itemIds: (param0: NamespacedId) => kotlin.Int;
    readonly reloadRequired: boolean;
    readonly separateEntityDraws: boolean;
    readonly useSeparateAo: boolean;
    readonly voxelizeLightBlocks: boolean;
    breaksAnisotropy(): boolean;
    clearReloadRequired(): void;
    getAmbientOcclusionLevel(): number;
    getBlockStateIds(): Object2IntMap<BlockState>;
    getBlockTypeIds(): Map<Block, BlockRenderType>;
    getEntityIds(): (param0: NamespacedId) => kotlin.Int;
    getItemIds(): (param0: NamespacedId) => kotlin.Int;
    getVertexFormat(): ChunkVertexType;
    hasVillagerConversionId(): boolean;
    isReloadRequired(): boolean;
    setAmbientOcclusionLevel(arg0: number): void;
    setBlockStateIds(arg0: Object2IntMap<BlockState>): void;
    setBlockTypeIds(arg0: Map<Block, BlockRenderType>): void;
    setBreaksAnisotropy(arg0: boolean): void;
    setDisableDirectionalShading(arg0: boolean): void;
    setEntityIds(arg0: (param0: NamespacedId) => kotlin.Int): void;
    setItemIds(arg0: (param0: NamespacedId) => kotlin.Int): void;
    setSeparateEntityDraws(arg0: boolean): void;
    setUseSeparateAo(arg0: boolean): void;
    setVertexFormat(arg0: ChunkVertexType): void;
    setVoxelizeLightBlocks(arg0: boolean): void;
    shouldDisableDirectionalShading(): boolean;
    shouldSeparateEntityDraws(): boolean;
    shouldUseSeparateAo(): boolean;
    shouldVoxelizeLightBlocks(): boolean;
}