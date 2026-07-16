import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SECURITY_ATTRIBUTES extends Struct<SECURITY_ATTRIBUTES> implements NativeResource {
    static ALIGNOF: number;
    static BINHERITHANDLE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LPSECURITYDESCRIPTOR: number;
    static NLENGTH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): SECURITY_ATTRIBUTES;
    static calloc(paramarg0: MemoryStack): SECURITY_ATTRIBUTES;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SECURITY_ATTRIBUTES;
    static create(paramarg0: number): SECURITY_ATTRIBUTES;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SECURITY_ATTRIBUTES;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SECURITY_ATTRIBUTES;
    static malloc(paramarg0: MemoryStack): SECURITY_ATTRIBUTES;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbInheritHandle(paramarg0: number): number;
    static nbInheritHandle(paramarg0: number, paramarg1: number): void;
    static nlpSecurityDescriptor(paramarg0: number): number;
    static nlpSecurityDescriptor(paramarg0: number, paramarg1: number): void;
    static nnLength(paramarg0: number): number;
    static nnLength(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bInheritHandle(): boolean;
    bInheritHandle(arg0: boolean): SECURITY_ATTRIBUTES;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SECURITY_ATTRIBUTES;
    lpSecurityDescriptor(): number;
    lpSecurityDescriptor(arg0: number): SECURITY_ATTRIBUTES;
    nLength(): number;
    nLength(arg0: number): SECURITY_ATTRIBUTES;
    set(arg0: number, arg1: number, arg2: boolean): SECURITY_ATTRIBUTES;
    set(arg0: SECURITY_ATTRIBUTES): SECURITY_ATTRIBUTES;
    sizeof(): number;
}