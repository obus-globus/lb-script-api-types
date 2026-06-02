import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class Msghdr extends Struct<Msghdr> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MSG_CONTROL: number;
    static MSG_CONTROLLEN: number;
    static MSG_FLAGS: number;
    static MSG_IOV: number;
    static MSG_IOVLEN: number;
    static MSG_NAME: number;
    static MSG_NAMELEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): Msghdr;
    static calloc(paramarg0: MemoryStack): Msghdr;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): Msghdr;
    static create(paramarg0: number): Msghdr;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): Msghdr;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): Msghdr;
    static malloc(paramarg0: MemoryStack): Msghdr;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmsg_control(paramarg0: number): ByteBuffer;
    static nmsg_control(paramarg0: number, paramarg1: ByteBuffer): void;
    static nmsg_controllen(paramarg0: number): number;
    static nmsg_controllen(paramarg0: number, paramarg1: number): void;
    static nmsg_flags(paramarg0: number): number;
    static nmsg_flags(paramarg0: number, paramarg1: number): void;
    static nmsg_iov(paramarg0: number): (Object | null)[];
    static nmsg_iov(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nmsg_iovlen(paramarg0: number): number;
    static nmsg_iovlen(paramarg0: number, paramarg1: number): void;
    static nmsg_name(paramarg0: number): ByteBuffer;
    static nmsg_name(paramarg0: number, paramarg1: ByteBuffer): void;
    static nmsg_namelen(paramarg0: number): number;
    static nmsg_namelen(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): Msghdr;
    msg_control(): ByteBuffer;
    msg_control(arg0: ByteBuffer): Msghdr;
    msg_controllen(): number;
    msg_flags(): number;
    msg_flags(arg0: number): Msghdr;
    msg_iov(): (Object | null)[];
    msg_iov(arg0: (Object | null)[]): Msghdr;
    msg_iovlen(): number;
    msg_name(): ByteBuffer;
    msg_name(arg0: ByteBuffer): Msghdr;
    msg_namelen(): number;
    set(arg0: ByteBuffer, arg1: (Object | null)[], arg2: ByteBuffer, arg3: number): Msghdr;
    set(arg0: Msghdr): Msghdr;
    sizeof(): number;
}