import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevicePresentTimingFeaturesEXT extends Struct<VkPhysicalDevicePresentTimingFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTATABSOLUTETIME: number;
    static PRESENTATRELATIVETIME: number;
    static PRESENTTIMING: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePresentTimingFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePresentTimingFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePresentTimingFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDevicePresentTimingFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePresentTimingFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePresentTimingFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePresentTimingFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentAtAbsoluteTime(paramarg0: number): number;
    static npresentAtAbsoluteTime(paramarg0: number, paramarg1: number): void;
    static npresentAtRelativeTime(paramarg0: number): number;
    static npresentAtRelativeTime(paramarg0: number, paramarg1: number): void;
    static npresentTiming(paramarg0: number): number;
    static npresentTiming(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePresentTimingFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePresentTimingFeaturesEXT;
    presentAtAbsoluteTime(): boolean;
    presentAtAbsoluteTime(arg0: boolean): VkPhysicalDevicePresentTimingFeaturesEXT;
    presentAtRelativeTime(): boolean;
    presentAtRelativeTime(arg0: boolean): VkPhysicalDevicePresentTimingFeaturesEXT;
    presentTiming(): boolean;
    presentTiming(arg0: boolean): VkPhysicalDevicePresentTimingFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePresentTimingFeaturesEXT;
    sType$Default(): VkPhysicalDevicePresentTimingFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDevicePresentTimingFeaturesEXT;
    set(arg0: VkPhysicalDevicePresentTimingFeaturesEXT): VkPhysicalDevicePresentTimingFeaturesEXT;
    sizeof(): number;
}