import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceImageDrmFormatModifierInfoEXT extends Struct<VkPhysicalDeviceImageDrmFormatModifierInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DRMFORMATMODIFIER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUEUEFAMILYINDICES: number;
    static QUEUEFAMILYINDEXCOUNT: number;
    static SHARINGMODE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    static create(paramarg0: number): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndrmFormatModifier(paramarg0: number): number;
    static ndrmFormatModifier(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npQueueFamilyIndices(paramarg0: number): IntBuffer;
    static npQueueFamilyIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static nqueueFamilyIndexCount(paramarg0: number): number;
    static nqueueFamilyIndexCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsharingMode(paramarg0: number): number;
    static nsharingMode(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    drmFormatModifier(): number;
    drmFormatModifier(arg0: number): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    pQueueFamilyIndices(): IntBuffer;
    pQueueFamilyIndices(arg0: IntBuffer): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    queueFamilyIndexCount(): number;
    queueFamilyIndexCount(arg0: number): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    sType$Default(): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: IntBuffer): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    set(arg0: VkPhysicalDeviceImageDrmFormatModifierInfoEXT): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    sharingMode(): number;
    sharingMode(arg0: number): VkPhysicalDeviceImageDrmFormatModifierInfoEXT;
    sizeof(): number;
}