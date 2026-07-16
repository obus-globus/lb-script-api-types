import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPresentTimingsInfoEXT extends Struct<VkPresentTimingsInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTIMINGINFOS: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAINCOUNT: number;
    static calloc(): VkPresentTimingsInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPresentTimingsInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPresentTimingsInfoEXT;
    static create(paramarg0: number): VkPresentTimingsInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPresentTimingsInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPresentTimingsInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPresentTimingsInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTimingInfos(paramarg0: number): (Object | null)[];
    static npTimingInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nswapchainCount(paramarg0: number): number;
    static nswapchainCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPresentTimingsInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPresentTimingsInfoEXT;
    pTimingInfos(): (Object | null)[];
    pTimingInfos(arg0: (Object | null)[]): VkPresentTimingsInfoEXT;
    sType(): number;
    sType(arg0: number): VkPresentTimingsInfoEXT;
    sType$Default(): VkPresentTimingsInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkPresentTimingsInfoEXT;
    set(arg0: VkPresentTimingsInfoEXT): VkPresentTimingsInfoEXT;
    sizeof(): number;
    swapchainCount(): number;
    swapchainCount(arg0: number): VkPresentTimingsInfoEXT;
}