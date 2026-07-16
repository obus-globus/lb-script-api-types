import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class CMsghdr extends Struct<CMsghdr> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CMSG_DATA: number;
    static CMSG_LEN: number;
    static CMSG_LEVEL: number;
    static CMSG_TYPE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): CMsghdr;
    static calloc(paramarg0: MemoryStack): CMsghdr;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): CMsghdr;
    static create(paramarg0: number): CMsghdr;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): CMsghdr;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): CMsghdr;
    static malloc(paramarg0: MemoryStack): CMsghdr;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncmsg_data(paramarg0: number, paramarg1: number): number;
    static ncmsg_data(paramarg0: number): ByteBuffer;
    static ncmsg_data(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncmsg_data(paramarg0: number, paramarg1: ByteBuffer): void;
    static ncmsg_len(paramarg0: number): number;
    static ncmsg_len(paramarg0: number, paramarg1: number): void;
    static ncmsg_level(paramarg0: number): number;
    static ncmsg_level(paramarg0: number, paramarg1: number): void;
    static ncmsg_type(paramarg0: number): number;
    static ncmsg_type(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cmsg_data(): ByteBuffer;
    cmsg_data(arg0: ByteBuffer): CMsghdr;
    cmsg_data(arg0: number): number;
    cmsg_data(arg0: number, arg1: number): CMsghdr;
    cmsg_len(): number;
    cmsg_len(arg0: number): CMsghdr;
    cmsg_level(): number;
    cmsg_level(arg0: number): CMsghdr;
    cmsg_type(): number;
    cmsg_type(arg0: number): CMsghdr;
    create(arg0: number, arg1: ByteBuffer): CMsghdr;
    set(arg0: number, arg1: number, arg2: number, arg3: ByteBuffer): CMsghdr;
    set(arg0: CMsghdr): CMsghdr;
    sizeof(): number;
}