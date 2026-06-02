import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingGeteventsArg extends Struct<IOURingGeteventsArg> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MIN_WAIT_USEC: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIGMASK: number;
    static SIGMASK_SZ: number;
    static SIZEOF: number;
    static TS: number;
    static calloc(): IOURingGeteventsArg;
    static calloc(paramarg0: MemoryStack): IOURingGeteventsArg;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingGeteventsArg;
    static create(paramarg0: number): IOURingGeteventsArg;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingGeteventsArg;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingGeteventsArg;
    static malloc(paramarg0: MemoryStack): IOURingGeteventsArg;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmin_wait_usec(paramarg0: number): number;
    static nmin_wait_usec(paramarg0: number, paramarg1: number): void;
    static nsigmask(paramarg0: number): number;
    static nsigmask(paramarg0: number, paramarg1: number): void;
    static nsigmask_sz(paramarg0: number): number;
    static nsigmask_sz(paramarg0: number, paramarg1: number): void;
    static nts(paramarg0: number): number;
    static nts(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingGeteventsArg;
    min_wait_usec(): number;
    min_wait_usec(arg0: number): IOURingGeteventsArg;
    set(arg0: number, arg1: number, arg2: number, arg3: number): IOURingGeteventsArg;
    set(arg0: IOURingGeteventsArg): IOURingGeteventsArg;
    sigmask(): number;
    sigmask(arg0: number): IOURingGeteventsArg;
    sigmask_sz(): number;
    sigmask_sz(arg0: number): IOURingGeteventsArg;
    sizeof(): number;
    ts(): number;
    ts(arg0: number): IOURingGeteventsArg;
}