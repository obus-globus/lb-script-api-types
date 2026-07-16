import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkFenceGetFdInfoKHR extends Struct<VkFenceGetFdInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FENCE: number;
    static HANDLETYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkFenceGetFdInfoKHR;
    static calloc(paramarg0: MemoryStack): VkFenceGetFdInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFenceGetFdInfoKHR;
    static create(paramarg0: number): VkFenceGetFdInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFenceGetFdInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFenceGetFdInfoKHR;
    static malloc(paramarg0: MemoryStack): VkFenceGetFdInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfence(paramarg0: number): number;
    static nfence(paramarg0: number, paramarg1: number): void;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFenceGetFdInfoKHR;
    fence(): number;
    fence(arg0: number): VkFenceGetFdInfoKHR;
    handleType(): number;
    handleType(arg0: number): VkFenceGetFdInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkFenceGetFdInfoKHR;
    sType(): number;
    sType(arg0: number): VkFenceGetFdInfoKHR;
    sType$Default(): VkFenceGetFdInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkFenceGetFdInfoKHR;
    set(arg0: VkFenceGetFdInfoKHR): VkFenceGetFdInfoKHR;
    sizeof(): number;
}