import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPass$Draw } from '../../../../../com/mojang/blaze3d/systems/RenderPass$Draw.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SodiumWorldRenderer } from '../../../../../net/caffeinemc/mods/sodium/client/render/SodiumWorldRenderer.d.ts'
import type { ChunkRenderMatrices } from '../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { SodiumChunkSection } from '../../../../../net/caffeinemc/mods/sodium/client/util/SodiumChunkSection.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { ChunkSectionLayerGroup } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayerGroup.d.ts'
export class ChunkSectionsToRender extends Record implements SodiumChunkSection {
    // private chunkSectionInfos: GpuBufferSlice[];
    // private drawGroupsPerLayer: { [key in ChunkSectionLayer]: Int2ObjectOpenHashMap<RenderPass$Draw<GpuBufferSlice[]>[]> };
    // private matrices: ChunkRenderMatrices;
    // private maxIndicesRequired: number;
    // private renderer: SodiumWorldRenderer;
    // private textureView: GpuTextureView;
    // private x: number;
    // private y: number;
    // private z: number;
    chunkSectionInfos(): GpuBufferSlice[];
    drawGroupsPerLayer(): { [key in ChunkSectionLayer]: Int2ObjectOpenHashMap<RenderPass$Draw<GpuBufferSlice[]>[]> };
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxIndicesRequired(): number;
    renderGroup(group: ChunkSectionLayerGroup, sampler: GpuSampler): void;
    sodium$setRendering(arg0: SodiumWorldRenderer, arg1: ChunkRenderMatrices, arg2: number, arg3: number, arg4: number): void;
    textureView(): GpuTextureView;
    toString(): string;
}