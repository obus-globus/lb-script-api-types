import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoProfileInfoKHR.d.ts'
export class VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR extends Struct<VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVIDEOPROFILE: number;
    static QUALITYLEVEL: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    static create(paramarg0: number): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npVideoProfile(paramarg0: number): VkVideoProfileInfoKHR;
    static npVideoProfile(paramarg0: number, paramarg1: VkVideoProfileInfoKHR): void;
    static nqualityLevel(paramarg0: number): number;
    static nqualityLevel(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    pVideoProfile(): VkVideoProfileInfoKHR;
    pVideoProfile(arg0: VkVideoProfileInfoKHR): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    qualityLevel(): number;
    qualityLevel(arg0: number): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    sType$Default(): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    set(arg0: number, arg1: number, arg2: VkVideoProfileInfoKHR, arg3: number): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    set(arg0: VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR): VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR;
    sizeof(): number;
}