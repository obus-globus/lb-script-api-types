import type { FileDescriptor } from '../../java/io/FileDescriptor.d.ts'
import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { UnmapperProxy } from '../../jdk/internal/access/foreign/UnmapperProxy.d.ts'
export class MappedByteBuffer extends ByteBuffer {
    static allocate(paramarg0: number): ByteBuffer;
    static allocateDirect(paramarg0: number): ByteBuffer;
    static wrap(paramarg0: number[]): ByteBuffer;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): ByteBuffer;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: FileDescriptor, arg5: boolean, arg6: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: MemorySegment)
    // private fd: FileDescriptor;
    // private isSync: boolean;
    clear(): MappedByteBuffer;
    compact(): MappedByteBuffer;
    duplicate(): MappedByteBuffer;
    fileDescriptor(): FileDescriptor;
    flip(): MappedByteBuffer;
    force(): MappedByteBuffer;
    force(arg0: number, arg1: number): MappedByteBuffer;
    isLoaded(): boolean;
    isSync(): boolean;
    limit(): number;
    limit(arg0: number): MappedByteBuffer;
    load(): MappedByteBuffer;
    mark(): MappedByteBuffer;
    position(): number;
    position(arg0: number): MappedByteBuffer;
    reset(): MappedByteBuffer;
    rewind(): MappedByteBuffer;
    slice(): MappedByteBuffer;
    slice(arg0: number, arg1: number): MappedByteBuffer;
    unmapper(): UnmapperProxy;
}