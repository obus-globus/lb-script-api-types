import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class Flock extends Struct<Flock> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static L_LEN: number;
    static L_PID: number;
    static L_START: number;
    static L_TYPE: number;
    static L_WHENCE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): Flock;
    static calloc(paramarg0: MemoryStack): Flock;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): Flock;
    static create(paramarg0: number): Flock;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): Flock;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): Flock;
    static malloc(paramarg0: MemoryStack): Flock;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nl_len(paramarg0: number): number;
    static nl_len(paramarg0: number, paramarg1: number): void;
    static nl_pid(paramarg0: number): number;
    static nl_pid(paramarg0: number, paramarg1: number): void;
    static nl_start(paramarg0: number): number;
    static nl_start(paramarg0: number, paramarg1: number): void;
    static nl_type(paramarg0: number): number;
    static nl_type(paramarg0: number, paramarg1: number): void;
    static nl_whence(paramarg0: number): number;
    static nl_whence(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): Flock;
    l_len(): number;
    l_len(arg0: number): Flock;
    l_pid(): number;
    l_pid(arg0: number): Flock;
    l_start(): number;
    l_start(arg0: number): Flock;
    l_type(): number;
    l_type(arg0: number): Flock;
    l_whence(): number;
    l_whence(arg0: number): Flock;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Flock;
    set(arg0: Flock): Flock;
    sizeof(): number;
}