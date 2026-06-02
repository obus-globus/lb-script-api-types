import type { GraphicsWorkarounds } from '../../../../com/mojang/blaze3d/GraphicsWorkarounds.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GLCapabilities } from '../../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export abstract class DirectStateAccess extends Object {
    static create(paramcapabilities: GLCapabilities, paramenabledExtensions: string[], paramworkarounds: GraphicsWorkarounds): DirectStateAccess;
    constructor()
    bindFrameBufferTextures(fbo: number, color0: number, depth: number, mipLevel: number, bindSlot: number): void;
    blitFrameBuffers(source: number, dest: number, srcX0: number, srcY0: number, srcX1: number, srcY1: number, dstX0: number, dstY0: number, dstX1: number, dstY1: number, mask: number, filter: number): void;
    bufferData(buffer: number, data: ByteBuffer, usage: number): void;
    bufferData(buffer: number, size: number, usage: number): void;
    bufferStorage(buffer: number, data: ByteBuffer, usage: number): void;
    bufferStorage(buffer: number, size: number, usage: number): void;
    bufferSubData(buffer: number, offset: number, data: ByteBuffer, usage: number): void;
    copyBufferSubData(source: number, target: number, sourceOffset: number, targetOffset: number, length: number): void;
    createBuffer(): number;
    createFrameBufferObject(): number;
    flushMappedBufferRange(handle: number, offset: number, length: number, usage: number): void;
    mapBufferRange(buffer: number, offset: number, length: number, access: number, usage: number): ByteBuffer;
    unmapBuffer(buffer: number, usage: number): void;
}