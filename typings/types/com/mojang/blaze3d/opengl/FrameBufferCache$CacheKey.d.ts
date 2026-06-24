import type { FrameBufferAttachment } from '../../../../com/mojang/blaze3d/opengl/FrameBufferAttachment.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FrameBufferCache$CacheKey extends Object {
    constructor(colorAttachments: FrameBufferAttachment[], depthAttachment: FrameBufferAttachment)
    associatedAttachments: FrameBufferAttachment[];
    // private data: number[];
    // private hash: number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}