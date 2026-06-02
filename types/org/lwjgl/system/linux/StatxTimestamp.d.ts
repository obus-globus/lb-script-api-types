import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StatxTimestamp extends Struct<StatxTimestamp> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TV_NSEC: number;
    static TV_SEC: number;
    static __RESERVED: number;
    static calloc(): StatxTimestamp;
    static calloc(paramarg0: MemoryStack): StatxTimestamp;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StatxTimestamp;
    static create(paramarg0: number): StatxTimestamp;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StatxTimestamp;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StatxTimestamp;
    static malloc(paramarg0: MemoryStack): StatxTimestamp;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static n__reserved(paramarg0: number): number;
    static n__reserved(paramarg0: number, paramarg1: number): void;
    static ntv_nsec(paramarg0: number): number;
    static ntv_nsec(paramarg0: number, paramarg1: number): void;
    static ntv_sec(paramarg0: number): number;
    static ntv_sec(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StatxTimestamp;
    set(arg0: number, arg1: number): StatxTimestamp;
    set(arg0: StatxTimestamp): StatxTimestamp;
    sizeof(): number;
    tv_nsec(): number;
    tv_nsec(arg0: number): StatxTimestamp;
    tv_sec(): number;
    tv_sec(arg0: number): StatxTimestamp;
}