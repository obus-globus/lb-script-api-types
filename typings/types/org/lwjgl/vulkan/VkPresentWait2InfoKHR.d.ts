import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPresentWait2InfoKHR extends Struct<VkPresentWait2InfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTID: number;
    static SIZEOF: number;
    static STYPE: number;
    static TIMEOUT: number;
    static calloc(): VkPresentWait2InfoKHR;
    static calloc(paramarg0: MemoryStack): VkPresentWait2InfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPresentWait2InfoKHR;
    static create(paramarg0: number): VkPresentWait2InfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPresentWait2InfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPresentWait2InfoKHR;
    static malloc(paramarg0: MemoryStack): VkPresentWait2InfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentId(paramarg0: number): number;
    static npresentId(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntimeout(paramarg0: number): number;
    static ntimeout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPresentWait2InfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPresentWait2InfoKHR;
    presentId(): number;
    presentId(arg0: number): VkPresentWait2InfoKHR;
    sType(): number;
    sType(arg0: number): VkPresentWait2InfoKHR;
    sType$Default(): VkPresentWait2InfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkPresentWait2InfoKHR;
    set(arg0: VkPresentWait2InfoKHR): VkPresentWait2InfoKHR;
    sizeof(): number;
    timeout(): number;
    timeout(arg0: number): VkPresentWait2InfoKHR;
}