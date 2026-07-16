import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class EpollData extends Struct<EpollData> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FD: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTR: number;
    static SIZEOF: number;
    static U32: number;
    static U64: number;
    static calloc(): EpollData;
    static calloc(paramarg0: MemoryStack): EpollData;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): EpollData;
    static create(paramarg0: number): EpollData;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): EpollData;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): EpollData;
    static malloc(paramarg0: MemoryStack): EpollData;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfd(paramarg0: number): number;
    static nfd(paramarg0: number, paramarg1: number): void;
    static nptr(paramarg0: number): number;
    static nptr(paramarg0: number, paramarg1: number): void;
    static nu32(paramarg0: number): number;
    static nu32(paramarg0: number, paramarg1: number): void;
    static nu64(paramarg0: number): number;
    static nu64(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): EpollData;
    fd(): number;
    fd(arg0: number): EpollData;
    ptr(): number;
    ptr(arg0: number): EpollData;
    set(arg0: EpollData): EpollData;
    sizeof(): number;
    u32(): number;
    u32(arg0: number): EpollData;
    u64(): number;
    u64(arg0: number): EpollData;
}