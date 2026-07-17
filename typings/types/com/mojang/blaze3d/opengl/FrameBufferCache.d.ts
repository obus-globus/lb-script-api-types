import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { DirectStateAccess } from '../../../../com/mojang/blaze3d/opengl/DirectStateAccess.d.ts'
import type { FrameBufferAttachment } from '../../../../com/mojang/blaze3d/opengl/FrameBufferAttachment.d.ts'
import type { FrameBufferCache$CacheKey } from '../../../../com/mojang/blaze3d/opengl/FrameBufferCache$CacheKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FrameBufferCache extends Object {
    constructor()
    // private cache: JavaMap<any, any>;
    // private createFbo(key: FrameBufferCache$CacheKey, dsa: DirectStateAccess, colorAttachments: FrameBufferAttachment[], depthAttachment: FrameBufferAttachment): number;
    destroyFbo(key: FrameBufferCache$CacheKey): void;
    getFbo(dsa: DirectStateAccess, colorTextures: FrameBufferAttachment[], depthTexture: FrameBufferAttachment): number;
}