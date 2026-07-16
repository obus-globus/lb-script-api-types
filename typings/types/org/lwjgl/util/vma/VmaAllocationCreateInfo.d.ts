import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VmaAllocationCreateInfo extends Struct<VmaAllocationCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MEMORYTYPEBITS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POOL: number;
    static PREFERREDFLAGS: number;
    static PRIORITY: number;
    static PUSERDATA: number;
    static REQUIREDFLAGS: number;
    static SIZEOF: number;
    static USAGE: number;
    static calloc(): VmaAllocationCreateInfo;
    static calloc(paramarg0: MemoryStack): VmaAllocationCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaAllocationCreateInfo;
    static create(paramarg0: number): VmaAllocationCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaAllocationCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaAllocationCreateInfo;
    static malloc(paramarg0: MemoryStack): VmaAllocationCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmemoryTypeBits(paramarg0: number): number;
    static nmemoryTypeBits(paramarg0: number, paramarg1: number): void;
    static npUserData(paramarg0: number): number;
    static npUserData(paramarg0: number, paramarg1: number): void;
    static npool(paramarg0: number): number;
    static npool(paramarg0: number, paramarg1: number): void;
    static npreferredFlags(paramarg0: number): number;
    static npreferredFlags(paramarg0: number, paramarg1: number): void;
    static npriority(paramarg0: number): number;
    static npriority(paramarg0: number, paramarg1: number): void;
    static nrequiredFlags(paramarg0: number): number;
    static nrequiredFlags(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaAllocationCreateInfo;
    flags(): number;
    flags(arg0: number): VmaAllocationCreateInfo;
    memoryTypeBits(): number;
    memoryTypeBits(arg0: number): VmaAllocationCreateInfo;
    pUserData(): number;
    pUserData(arg0: number): VmaAllocationCreateInfo;
    pool(): number;
    pool(arg0: number): VmaAllocationCreateInfo;
    preferredFlags(): number;
    preferredFlags(arg0: number): VmaAllocationCreateInfo;
    priority(): number;
    priority(arg0: number): VmaAllocationCreateInfo;
    requiredFlags(): number;
    requiredFlags(arg0: number): VmaAllocationCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): VmaAllocationCreateInfo;
    set(arg0: VmaAllocationCreateInfo): VmaAllocationCreateInfo;
    sizeof(): number;
    usage(): number;
    usage(arg0: number): VmaAllocationCreateInfo;
}