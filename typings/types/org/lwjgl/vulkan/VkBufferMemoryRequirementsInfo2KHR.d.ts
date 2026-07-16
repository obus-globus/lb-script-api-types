import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferMemoryRequirementsInfo2 } from '../../../org/lwjgl/vulkan/VkBufferMemoryRequirementsInfo2.d.ts'
export class VkBufferMemoryRequirementsInfo2KHR extends VkBufferMemoryRequirementsInfo2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBufferMemoryRequirementsInfo2;
    static calloc(paramarg0: MemoryStack): VkBufferMemoryRequirementsInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBufferMemoryRequirementsInfo2KHR;
    static calloc(paramarg0: MemoryStack): VkBufferMemoryRequirementsInfo2KHR;
    static create(): VkBufferMemoryRequirementsInfo2;
    static create(paramarg0: number): VkBufferMemoryRequirementsInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBufferMemoryRequirementsInfo2KHR;
    static create(paramarg0: number): VkBufferMemoryRequirementsInfo2KHR;
    static createSafe(paramarg0: number): VkBufferMemoryRequirementsInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferMemoryRequirementsInfo2KHR;
    static malloc(): VkBufferMemoryRequirementsInfo2;
    static malloc(paramarg0: MemoryStack): VkBufferMemoryRequirementsInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBufferMemoryRequirementsInfo2KHR;
    static malloc(paramarg0: MemoryStack): VkBufferMemoryRequirementsInfo2KHR;
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkBufferMemoryRequirementsInfo2KHR;
    create(arg0: number, arg1: ByteBuffer): VkBufferMemoryRequirementsInfo2KHR;
    pNext(): number;
    pNext(arg0: number): VkBufferMemoryRequirementsInfo2KHR;
    sType(): number;
    sType(arg0: number): VkBufferMemoryRequirementsInfo2KHR;
    sType$Default(): VkBufferMemoryRequirementsInfo2KHR;
    set(arg0: number, arg1: number, arg2: number): VkBufferMemoryRequirementsInfo2KHR;
    set(arg0: VkBufferMemoryRequirementsInfo2): VkBufferMemoryRequirementsInfo2;
    set(arg0: VkBufferMemoryRequirementsInfo2KHR): VkBufferMemoryRequirementsInfo2KHR;
}