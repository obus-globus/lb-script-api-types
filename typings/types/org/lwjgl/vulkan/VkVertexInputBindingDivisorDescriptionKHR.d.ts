import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVertexInputBindingDivisorDescription } from '../../../org/lwjgl/vulkan/VkVertexInputBindingDivisorDescription.d.ts'
export class VkVertexInputBindingDivisorDescriptionKHR extends VkVertexInputBindingDivisorDescription {
    static ALIGNOF: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DIVISOR: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkVertexInputBindingDivisorDescription;
    static calloc(paramarg0: MemoryStack): VkVertexInputBindingDivisorDescription;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkVertexInputBindingDivisorDescriptionKHR;
    static calloc(paramarg0: MemoryStack): VkVertexInputBindingDivisorDescriptionKHR;
    static create(): VkVertexInputBindingDivisorDescription;
    static create(paramarg0: number): VkVertexInputBindingDivisorDescription;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkVertexInputBindingDivisorDescriptionKHR;
    static create(paramarg0: number): VkVertexInputBindingDivisorDescriptionKHR;
    static createSafe(paramarg0: number): VkVertexInputBindingDivisorDescription;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVertexInputBindingDivisorDescriptionKHR;
    static malloc(): VkVertexInputBindingDivisorDescription;
    static malloc(paramarg0: MemoryStack): VkVertexInputBindingDivisorDescription;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkVertexInputBindingDivisorDescriptionKHR;
    static malloc(paramarg0: MemoryStack): VkVertexInputBindingDivisorDescriptionKHR;
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static ndivisor(paramarg0: number): number;
    static ndivisor(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binding(): number;
    binding(arg0: number): VkVertexInputBindingDivisorDescriptionKHR;
    create(arg0: number, arg1: ByteBuffer): VkVertexInputBindingDivisorDescriptionKHR;
    divisor(): number;
    divisor(arg0: number): VkVertexInputBindingDivisorDescriptionKHR;
    set(arg0: number, arg1: number): VkVertexInputBindingDivisorDescriptionKHR;
    set(arg0: VkVertexInputBindingDivisorDescription): VkVertexInputBindingDivisorDescription;
    set(arg0: VkVertexInputBindingDivisorDescriptionKHR): VkVertexInputBindingDivisorDescriptionKHR;
}