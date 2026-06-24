import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceVideoDecodeVP9FeaturesKHR extends Struct<VkPhysicalDeviceVideoDecodeVP9FeaturesKHR> implements NativeResource {
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
    static VIDEODECODEVP9: number;
    static calloc(): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvideoDecodeVP9(paramarg0: number): number;
    static nvideoDecodeVP9(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    sType$Default(): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    set(arg0: VkPhysicalDeviceVideoDecodeVP9FeaturesKHR): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
    sizeof(): number;
    videoDecodeVP9(): boolean;
    videoDecodeVP9(arg0: boolean): VkPhysicalDeviceVideoDecodeVP9FeaturesKHR;
}