import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MappableRingBuffer } from '../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
import type { LightmapRenderState } from '../../../../net/minecraft/client/renderer/state/LightmapRenderState.d.ts'
import type { DimensionType } from '../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
export class Lightmap extends Object implements AutoCloseable {
    static TEXTURE_SIZE: number;
    static getBrightness(paramdimensionType: DimensionType, paramlevel: number): number;
    constructor()
    // private texture: GpuTexture;
    readonly textureView: GpuTextureView;
    // private ubo: MappableRingBuffer;
    close(): void;
    getTextureView(): GpuTextureView;
    render(renderState: LightmapRenderState): void;
}