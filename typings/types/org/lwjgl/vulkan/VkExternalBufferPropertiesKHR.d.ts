import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExternalBufferProperties } from '../../../org/lwjgl/vulkan/VkExternalBufferProperties.d.ts'
import type { VkExternalMemoryProperties } from '../../../org/lwjgl/vulkan/VkExternalMemoryProperties.d.ts'
export class VkExternalBufferPropertiesKHR extends VkExternalBufferProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTERNALMEMORYPROPERTIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExternalBufferProperties;
    static calloc(paramarg0: MemoryStack): VkExternalBufferProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkExternalBufferPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkExternalBufferPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExternalBufferProperties;
    static create(paramarg0: number): VkExternalBufferProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkExternalBufferPropertiesKHR;
    static create(paramarg0: number): VkExternalBufferPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalBufferProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalBufferPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExternalBufferProperties;
    static malloc(paramarg0: MemoryStack): VkExternalBufferProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkExternalBufferPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkExternalBufferPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nexternalMemoryProperties(paramarg0: number): VkExternalMemoryProperties;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkExternalBufferPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkExternalBufferPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkExternalBufferPropertiesKHR;
    sType$Default(): VkExternalBufferPropertiesKHR;
    set(arg0: number, arg1: number): VkExternalBufferPropertiesKHR;
    set(arg0: VkExternalBufferProperties): VkExternalBufferProperties;
    set(arg0: VkExternalBufferPropertiesKHR): VkExternalBufferPropertiesKHR;
}