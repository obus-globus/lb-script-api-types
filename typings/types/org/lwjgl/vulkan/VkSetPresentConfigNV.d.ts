import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSetPresentConfigNV extends Struct<VkSetPresentConfigNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NUMFRAMESPERBATCH: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTCONFIGFEEDBACK: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSetPresentConfigNV;
    static calloc(paramarg0: MemoryStack): VkSetPresentConfigNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSetPresentConfigNV;
    static create(paramarg0: number): VkSetPresentConfigNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSetPresentConfigNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSetPresentConfigNV;
    static malloc(paramarg0: MemoryStack): VkSetPresentConfigNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nnumFramesPerBatch(paramarg0: number): number;
    static nnumFramesPerBatch(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentConfigFeedback(paramarg0: number): number;
    static npresentConfigFeedback(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSetPresentConfigNV;
    numFramesPerBatch(): number;
    numFramesPerBatch(arg0: number): VkSetPresentConfigNV;
    pNext(): number;
    pNext(arg0: number): VkSetPresentConfigNV;
    presentConfigFeedback(): number;
    presentConfigFeedback(arg0: number): VkSetPresentConfigNV;
    sType(): number;
    sType(arg0: number): VkSetPresentConfigNV;
    sType$Default(): VkSetPresentConfigNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkSetPresentConfigNV;
    set(arg0: VkSetPresentConfigNV): VkSetPresentConfigNV;
    sizeof(): number;
}