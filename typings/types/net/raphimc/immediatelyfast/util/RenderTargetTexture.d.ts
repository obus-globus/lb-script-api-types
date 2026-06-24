import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class RenderTargetTexture extends AbstractTexture {
    constructor(arg0: RenderTarget)
    close(): void;
}