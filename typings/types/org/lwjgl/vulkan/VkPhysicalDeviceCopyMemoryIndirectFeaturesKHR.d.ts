import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR extends Struct<VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDIRECTMEMORYCOPY: number;
    static INDIRECTMEMORYTOIMAGECOPY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindirectMemoryCopy(paramarg0: number): number;
    static nindirectMemoryCopy(paramarg0: number, paramarg1: number): void;
    static nindirectMemoryToImageCopy(paramarg0: number): number;
    static nindirectMemoryToImageCopy(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    indirectMemoryCopy(): boolean;
    indirectMemoryCopy(arg0: boolean): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    indirectMemoryToImageCopy(): boolean;
    indirectMemoryToImageCopy(arg0: boolean): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    sType$Default(): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    set(arg0: VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR): VkPhysicalDeviceCopyMemoryIndirectFeaturesKHR;
    sizeof(): number;
}