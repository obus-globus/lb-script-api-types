import type { FrameBufferCache$CacheKey } from '../../../../com/mojang/blaze3d/opengl/FrameBufferCache$CacheKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FrameBufferAttachment extends Object{
    addAssociatedFbo(fboKey: FrameBufferCache$CacheKey): void;
    fboMipLevel(): number;
    glId(): number;
    removeAssociatedFbo(fboKey: FrameBufferCache$CacheKey): void;
}