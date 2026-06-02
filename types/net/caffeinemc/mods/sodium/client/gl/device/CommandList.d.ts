import type { AutoCloseable } from '../../../../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlVertexArray } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/array/GlVertexArray.d.ts'
import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlBufferMapFlags } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferMapFlags.d.ts'
import type { GlBufferMapping } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferMapping.d.ts'
import type { GlBufferStorageFlags } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferStorageFlags.d.ts'
import type { GlBufferTarget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferTarget.d.ts'
import type { GlBufferUsage } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferUsage.d.ts'
import type { GlImmutableBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlImmutableBuffer.d.ts'
import type { GlMutableBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlMutableBuffer.d.ts'
import type { DrawCommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/DrawCommandList.d.ts'
import type { GlFence } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/sync/GlFence.d.ts'
import type { GlPrimitiveType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlPrimitiveType.d.ts'
import type { GlTessellation } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlTessellation.d.ts'
import type { TessellationBinding } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/TessellationBinding.d.ts'
import type { EnumBitField } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/util/EnumBitField.d.ts'
export interface CommandList extends AutoCloseable, Object{
    allocateStorage(arg0: GlMutableBuffer, arg1: number, arg2: GlBufferUsage): void;
    beginTessellating(arg0: GlTessellation): DrawCommandList;
    bindBuffer(arg0: GlBufferTarget, arg1: GlBuffer): void;
    bindVertexArray(arg0: GlVertexArray): void;
    close(): void;
    copyBufferSubData(arg0: GlBuffer, arg1: GlBuffer, arg2: number, arg3: number, arg4: number): void;
    createFence(): GlFence;
    createImmutableBuffer(arg0: number, arg1: EnumBitField<GlBufferStorageFlags>): GlImmutableBuffer;
    createMutableBuffer(): GlMutableBuffer;
    createTessellation(arg0: GlPrimitiveType, arg1: TessellationBinding[]): GlTessellation;
    deleteBuffer(arg0: GlBuffer): void;
    deleteTessellation(arg0: GlTessellation): void;
    deleteVertexArray(arg0: GlVertexArray): void;
    flush(): void;
    flushMappedRange(arg0: GlBufferMapping, arg1: number, arg2: number): void;
    mapBuffer(arg0: GlBuffer, arg1: number, arg2: number, arg3: EnumBitField<GlBufferMapFlags>): GlBufferMapping;
    unbindVertexArray(): void;
    unmap(arg0: GlBufferMapping): void;
    uploadData(arg0: GlMutableBuffer, arg1: ByteBuffer, arg2: GlBufferUsage): void;
    uploadDataToOffset(arg0: GlMutableBuffer, arg1: number, arg2: number, arg3: number): void;
}