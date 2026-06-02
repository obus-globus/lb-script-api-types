import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DynamicTexture } from '../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class UiLightmap extends Object implements AutoCloseable {
    constructor()
    // private texture: DynamicTexture;
    close(): void;
    getTextureView(): GpuTextureView;
}