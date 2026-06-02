import type { DirectStateAccess } from '../../../../com/mojang/blaze3d/opengl/DirectStateAccess.d.ts'
import type { GlTexture } from '../../../../com/mojang/blaze3d/opengl/GlTexture.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
export class GlTextureView extends GpuTextureView {
    constructor(texture: GlTexture, baseMipLevel: number, mipLevels: number)
    readonly closed: boolean;
    // private fboCache: Int2IntMap;
    // private firstFboDepthId: number;
    // private firstFboId: number;
    close(): void;
    // private createFbo(dsa: DirectStateAccess, depthid: number): number;
    getFbo(dsa: DirectStateAccess, depth: GpuTexture): number;
    isClosed(): boolean;
    texture(): GlTexture;
}