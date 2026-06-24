import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPresentTimesInfoGOOGLE extends Struct<VkPresentTimesInfoGOOGLE> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTIMES: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAINCOUNT: number;
    static calloc(): VkPresentTimesInfoGOOGLE;
    static calloc(paramarg0: MemoryStack): VkPresentTimesInfoGOOGLE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPresentTimesInfoGOOGLE;
    static create(paramarg0: number): VkPresentTimesInfoGOOGLE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPresentTimesInfoGOOGLE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPresentTimesInfoGOOGLE;
    static malloc(paramarg0: MemoryStack): VkPresentTimesInfoGOOGLE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTimes(paramarg0: number): (Object | null)[];
    static npTimes(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nswapchainCount(paramarg0: number): number;
    static nswapchainCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPresentTimesInfoGOOGLE;
    pNext(): number;
    pNext(arg0: number): VkPresentTimesInfoGOOGLE;
    pTimes(): (Object | null)[];
    pTimes(arg0: (Object | null)[]): VkPresentTimesInfoGOOGLE;
    sType(): number;
    sType(arg0: number): VkPresentTimesInfoGOOGLE;
    sType$Default(): VkPresentTimesInfoGOOGLE;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkPresentTimesInfoGOOGLE;
    set(arg0: VkPresentTimesInfoGOOGLE): VkPresentTimesInfoGOOGLE;
    sizeof(): number;
    swapchainCount(): number;
    swapchainCount(arg0: number): VkPresentTimesInfoGOOGLE;
}