import type { DirectStateAccess } from '../../../../com/mojang/blaze3d/opengl/DirectStateAccess.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { TextureFormat } from '../../../../com/mojang/blaze3d/textures/TextureFormat.d.ts'
import type { GpuTextureInterface } from '../../../../net/irisshaders/iris/mixinterface/GpuTextureInterface.d.ts'
export class GlTexture extends GpuTexture implements GpuTextureInterface {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_CUBEMAP_COMPATIBLE: number;
    static USAGE_RENDER_ATTACHMENT: number;
    static USAGE_TEXTURE_BINDING: number;
    constructor(usage: number, label: string, format: TextureFormat, width: number, height: number, depthOrLayers: number, mipLevels: number, id: number)
    closed: boolean;
    // private fboCache: Int2IntMap;
    // private firstFboDepthId: number;
    // private firstFboId: number;
    // private id: number;
    // private mipmapNonLinear: boolean;
    // private views: number;
    addViews(): void;
    close(): void;
    // private createFbo(dsa: DirectStateAccess, depthid: number): number;
    // private destroyImmediately(): void;
    getFbo(dsa: DirectStateAccess, depth: GpuTexture): number;
    glId(): number;
    iris$getGlId(): number;
    iris$markMipmapNonLinear(): void;
    isClosed(): boolean;
    removeViews(): void;
}