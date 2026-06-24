import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSwapchainCalibratedTimestampInfoEXT extends Struct<VkSwapchainCalibratedTimestampInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTSTAGE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAIN: number;
    static TIMEDOMAINID: number;
    static calloc(): VkSwapchainCalibratedTimestampInfoEXT;
    static calloc(paramarg0: MemoryStack): VkSwapchainCalibratedTimestampInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSwapchainCalibratedTimestampInfoEXT;
    static create(paramarg0: number): VkSwapchainCalibratedTimestampInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainCalibratedTimestampInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSwapchainCalibratedTimestampInfoEXT;
    static malloc(paramarg0: MemoryStack): VkSwapchainCalibratedTimestampInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentStage(paramarg0: number): number;
    static npresentStage(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nswapchain(paramarg0: number): number;
    static nswapchain(paramarg0: number, paramarg1: number): void;
    static ntimeDomainId(paramarg0: number): number;
    static ntimeDomainId(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSwapchainCalibratedTimestampInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkSwapchainCalibratedTimestampInfoEXT;
    presentStage(): number;
    presentStage(arg0: number): VkSwapchainCalibratedTimestampInfoEXT;
    sType(): number;
    sType(arg0: number): VkSwapchainCalibratedTimestampInfoEXT;
    sType$Default(): VkSwapchainCalibratedTimestampInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkSwapchainCalibratedTimestampInfoEXT;
    set(arg0: VkSwapchainCalibratedTimestampInfoEXT): VkSwapchainCalibratedTimestampInfoEXT;
    sizeof(): number;
    swapchain(): number;
    swapchain(arg0: number): VkSwapchainCalibratedTimestampInfoEXT;
    timeDomainId(): number;
    timeDomainId(arg0: number): VkSwapchainCalibratedTimestampInfoEXT;
}