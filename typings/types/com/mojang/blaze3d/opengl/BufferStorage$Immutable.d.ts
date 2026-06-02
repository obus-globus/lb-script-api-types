import type { BufferStorage } from '../../../../com/mojang/blaze3d/opengl/BufferStorage.d.ts'
import type { DirectStateAccess } from '../../../../com/mojang/blaze3d/opengl/DirectStateAccess.d.ts'
import type { GlBuffer } from '../../../../com/mojang/blaze3d/opengl/GlBuffer.d.ts'
import type { GlBuffer$GlMappedView } from '../../../../com/mojang/blaze3d/opengl/GlBuffer$GlMappedView.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { GLCapabilities } from '../../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export class BufferStorage$Immutable extends BufferStorage {
    static create(paramcapabilities: GLCapabilities, paramenabledExtensions: string[]): BufferStorage;
    private constructor()
    createBuffer(dsa: DirectStateAccess, label: () => string, usage: number, data: ByteBuffer): GlBuffer;
    createBuffer(dsa: DirectStateAccess, label: () => string, usage: number, size: number): GlBuffer;
    mapBuffer(dsa: DirectStateAccess, buffer: GlBuffer, offset: number, length: number, flags: number): GlBuffer$GlMappedView;
    // private tryMapBufferPersistent(dsa: DirectStateAccess, usage: number, buffer: number, size: number): ByteBuffer;
}