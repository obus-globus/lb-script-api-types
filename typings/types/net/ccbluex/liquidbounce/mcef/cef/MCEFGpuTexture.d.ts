import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { MCEFRenderer } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFRenderer.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class MCEFGpuTexture extends AbstractTexture {
    constructor(arg0: MCEFRenderer)
    // private renderer: MCEFRenderer;
    close(): void;
    getSampler(): GpuSampler;
    getTexture(): GpuTexture;
    getTextureView(): GpuTextureView;
}