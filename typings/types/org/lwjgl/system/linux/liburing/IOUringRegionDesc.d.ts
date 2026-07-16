import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOUringRegionDesc extends Struct<IOUringRegionDesc> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static ID: number;
    static MMAP_OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static USER_ADDR: number;
    static __RESV: number;
    static calloc(): IOUringRegionDesc;
    static calloc(paramarg0: MemoryStack): IOUringRegionDesc;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOUringRegionDesc;
    static create(paramarg0: number): IOUringRegionDesc;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOUringRegionDesc;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOUringRegionDesc;
    static malloc(paramarg0: MemoryStack): IOUringRegionDesc;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static n__resv(paramarg0: number): LongBuffer;
    static n__resv(paramarg0: number, paramarg1: number): number;
    static n__resv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static n__resv(paramarg0: number, paramarg1: LongBuffer): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nid(paramarg0: number): number;
    static nid(paramarg0: number, paramarg1: number): void;
    static nmmap_offset(paramarg0: number): number;
    static nmmap_offset(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static nuser_addr(paramarg0: number): number;
    static nuser_addr(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOUringRegionDesc;
    flags(): number;
    flags(arg0: number): IOUringRegionDesc;
    id(): number;
    id(arg0: number): IOUringRegionDesc;
    mmap_offset(): number;
    mmap_offset(arg0: number): IOUringRegionDesc;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): IOUringRegionDesc;
    set(arg0: IOUringRegionDesc): IOUringRegionDesc;
    size(): number;
    size(arg0: number): IOUringRegionDesc;
    sizeof(): number;
    user_addr(): number;
    user_addr(arg0: number): IOUringRegionDesc;
}