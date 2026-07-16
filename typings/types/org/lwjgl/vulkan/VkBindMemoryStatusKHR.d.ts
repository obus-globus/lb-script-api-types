import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBindMemoryStatus } from '../../../org/lwjgl/vulkan/VkBindMemoryStatus.d.ts'
export class VkBindMemoryStatusKHR extends VkBindMemoryStatus {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESULT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBindMemoryStatus;
    static calloc(paramarg0: MemoryStack): VkBindMemoryStatus;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBindMemoryStatusKHR;
    static calloc(paramarg0: MemoryStack): VkBindMemoryStatusKHR;
    static create(): VkBindMemoryStatus;
    static create(paramarg0: number): VkBindMemoryStatus;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBindMemoryStatusKHR;
    static create(paramarg0: number): VkBindMemoryStatusKHR;
    static createSafe(paramarg0: number): VkBindMemoryStatus;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindMemoryStatusKHR;
    static malloc(): VkBindMemoryStatus;
    static malloc(paramarg0: MemoryStack): VkBindMemoryStatus;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBindMemoryStatusKHR;
    static malloc(paramarg0: MemoryStack): VkBindMemoryStatusKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npResult(paramarg0: number, paramarg1: number): IntBuffer;
    static npResult(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkBindMemoryStatusKHR;
    pNext(): number;
    pNext(arg0: number): VkBindMemoryStatusKHR;
    pResult(arg0: IntBuffer): VkBindMemoryStatusKHR;
    pResult(arg0: number): IntBuffer;
    sType(): number;
    sType(arg0: number): VkBindMemoryStatusKHR;
    sType$Default(): VkBindMemoryStatusKHR;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkBindMemoryStatusKHR;
    set(arg0: VkBindMemoryStatus): VkBindMemoryStatus;
    set(arg0: VkBindMemoryStatusKHR): VkBindMemoryStatusKHR;
}