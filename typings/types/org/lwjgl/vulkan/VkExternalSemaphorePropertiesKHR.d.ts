import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExternalSemaphoreProperties } from '../../../org/lwjgl/vulkan/VkExternalSemaphoreProperties.d.ts'
export class VkExternalSemaphorePropertiesKHR extends VkExternalSemaphoreProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPATIBLEHANDLETYPES: number;
    static EXPORTFROMIMPORTEDHANDLETYPES: number;
    static EXTERNALSEMAPHOREFEATURES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExternalSemaphoreProperties;
    static calloc(paramarg0: MemoryStack): VkExternalSemaphoreProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkExternalSemaphorePropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkExternalSemaphorePropertiesKHR;
    static create(): VkExternalSemaphoreProperties;
    static create(paramarg0: number): VkExternalSemaphoreProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkExternalSemaphorePropertiesKHR;
    static create(paramarg0: number): VkExternalSemaphorePropertiesKHR;
    static createSafe(paramarg0: number): VkExternalSemaphoreProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalSemaphorePropertiesKHR;
    static malloc(): VkExternalSemaphoreProperties;
    static malloc(paramarg0: MemoryStack): VkExternalSemaphoreProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkExternalSemaphorePropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkExternalSemaphorePropertiesKHR;
    static ncompatibleHandleTypes(paramarg0: number): number;
    static nexportFromImportedHandleTypes(paramarg0: number): number;
    static nexternalSemaphoreFeatures(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkExternalSemaphorePropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkExternalSemaphorePropertiesKHR;
    sType(): number;
    sType(arg0: number): VkExternalSemaphorePropertiesKHR;
    sType$Default(): VkExternalSemaphorePropertiesKHR;
    set(arg0: number, arg1: number): VkExternalSemaphorePropertiesKHR;
    set(arg0: VkExternalSemaphoreProperties): VkExternalSemaphoreProperties;
    set(arg0: VkExternalSemaphorePropertiesKHR): VkExternalSemaphorePropertiesKHR;
}