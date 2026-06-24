import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { FrameBufferAttachment } from '../../../../com/mojang/blaze3d/opengl/FrameBufferAttachment.d.ts'
import type { FrameBufferCache } from '../../../../com/mojang/blaze3d/opengl/FrameBufferCache.d.ts'
import type { FrameBufferCache$CacheKey } from '../../../../com/mojang/blaze3d/opengl/FrameBufferCache$CacheKey.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureInterface } from '../../../../net/irisshaders/iris/mixinterface/GpuTextureInterface.d.ts'
export class GlTexture extends GpuTexture implements FrameBufferAttachment, GpuTextureInterface {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_CUBEMAP_COMPATIBLE: number;
    static USAGE_RENDER_ATTACHMENT: number;
    static USAGE_TEXTURE_BINDING: number;
    constructor(usage: number, label: string, format: GpuFormat, width: number, height: number, depthOrLayers: number, mipLevels: number, id: number, frameBufferCache: FrameBufferCache)
    closed: boolean;
    // private fboKeys: FrameBufferCache$CacheKey[];
    // private frameBufferCache: FrameBufferCache;
    // private id: number;
    // private mipmapNonLinear: boolean;
    // private views: number;
    addAssociatedFbo(fboKey: FrameBufferCache$CacheKey): void;
    addViews(): void;
    close(): void;
    // private destroyImmediately(): void;
    fboMipLevel(): number;
    glId(): number;
    iris$getGlId(): number;
    iris$markMipmapNonLinear(): void;
    isClosed(): boolean;
    removeAssociatedFbo(fboKey: FrameBufferCache$CacheKey): void;
    removeViews(): void;
}