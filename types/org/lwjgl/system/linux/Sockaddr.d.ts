import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class Sockaddr extends Struct<Sockaddr> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SA_DATA: number;
    static SA_FAMILY: number;
    static SIZEOF: number;
    static calloc(): Sockaddr;
    static calloc(paramarg0: MemoryStack): Sockaddr;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): Sockaddr;
    static create(paramarg0: number): Sockaddr;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): Sockaddr;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): Sockaddr;
    static malloc(paramarg0: MemoryStack): Sockaddr;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nsa_data(paramarg0: number, paramarg1: number): number;
    static nsa_data(paramarg0: number): ByteBuffer;
    static nsa_data(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nsa_data(paramarg0: number, paramarg1: ByteBuffer): void;
    static nsa_family(paramarg0: number): number;
    static nsa_family(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): Sockaddr;
    sa_data(): ByteBuffer;
    sa_data(arg0: ByteBuffer): Sockaddr;
    sa_data(arg0: number): number;
    sa_data(arg0: number, arg1: number): Sockaddr;
    sa_family(): number;
    sa_family(arg0: number): Sockaddr;
    set(arg0: number, arg1: ByteBuffer): Sockaddr;
    set(arg0: Sockaddr): Sockaddr;
    sizeof(): number;
}