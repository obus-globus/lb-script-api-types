import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSwapchainCalibratedTimestampInfoEXT } from '../../../org/lwjgl/vulkan/VkSwapchainCalibratedTimestampInfoEXT.d.ts'
export class VkCalibratedTimestampInfoKHR extends Struct<VkCalibratedTimestampInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TIMEDOMAIN: number;
    static calloc(): VkCalibratedTimestampInfoKHR;
    static calloc(paramarg0: MemoryStack): VkCalibratedTimestampInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCalibratedTimestampInfoKHR;
    static create(paramarg0: number): VkCalibratedTimestampInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCalibratedTimestampInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCalibratedTimestampInfoKHR;
    static malloc(paramarg0: MemoryStack): VkCalibratedTimestampInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntimeDomain(paramarg0: number): number;
    static ntimeDomain(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCalibratedTimestampInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkCalibratedTimestampInfoKHR;
    pNext(arg0: VkSwapchainCalibratedTimestampInfoEXT): VkCalibratedTimestampInfoKHR;
    sType(): number;
    sType(arg0: number): VkCalibratedTimestampInfoKHR;
    sType$Default(): VkCalibratedTimestampInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkCalibratedTimestampInfoKHR;
    set(arg0: VkCalibratedTimestampInfoKHR): VkCalibratedTimestampInfoKHR;
    sizeof(): number;
    timeDomain(): number;
    timeDomain(arg0: number): VkCalibratedTimestampInfoKHR;
}