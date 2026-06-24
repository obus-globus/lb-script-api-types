import type { FrameBufferAttachment } from '../../../../com/mojang/blaze3d/opengl/FrameBufferAttachment.d.ts'
import type { FrameBufferCache } from '../../../../com/mojang/blaze3d/opengl/FrameBufferCache.d.ts'
import type { FrameBufferCache$CacheKey } from '../../../../com/mojang/blaze3d/opengl/FrameBufferCache$CacheKey.d.ts'
import type { GlTexture } from '../../../../com/mojang/blaze3d/opengl/GlTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
export class GlTextureView extends GpuTextureView implements FrameBufferAttachment {
    constructor(texture: GlTexture, baseMipLevel: number, mipLevels: number, frameBufferCache: FrameBufferCache)
    readonly closed: boolean;
    // private fboKeys: FrameBufferCache$CacheKey[];
    // private frameBufferCache: FrameBufferCache;
    addAssociatedFbo(fboKey: FrameBufferCache$CacheKey): void;
    close(): void;
    fboMipLevel(): number;
    glId(): number;
    isClosed(): boolean;
    removeAssociatedFbo(fboKey: FrameBufferCache$CacheKey): void;
    texture(): GlTexture;
}