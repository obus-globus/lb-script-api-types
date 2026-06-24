import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeAV1QIndexKHR extends Struct<VkVideoEncodeAV1QIndexKHR> implements NativeResource {
    static ALIGNOF: number;
    static BIPREDICTIVEQINDEX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INTRAQINDEX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREDICTIVEQINDEX: number;
    static SIZEOF: number;
    static calloc(): VkVideoEncodeAV1QIndexKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeAV1QIndexKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeAV1QIndexKHR;
    static create(paramarg0: number): VkVideoEncodeAV1QIndexKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeAV1QIndexKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeAV1QIndexKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeAV1QIndexKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbipredictiveQIndex(paramarg0: number): number;
    static nbipredictiveQIndex(paramarg0: number, paramarg1: number): void;
    static nintraQIndex(paramarg0: number): number;
    static nintraQIndex(paramarg0: number, paramarg1: number): void;
    static npredictiveQIndex(paramarg0: number): number;
    static npredictiveQIndex(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bipredictiveQIndex(): number;
    bipredictiveQIndex(arg0: number): VkVideoEncodeAV1QIndexKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeAV1QIndexKHR;
    intraQIndex(): number;
    intraQIndex(arg0: number): VkVideoEncodeAV1QIndexKHR;
    predictiveQIndex(): number;
    predictiveQIndex(arg0: number): VkVideoEncodeAV1QIndexKHR;
    set(arg0: number, arg1: number, arg2: number): VkVideoEncodeAV1QIndexKHR;
    set(arg0: VkVideoEncodeAV1QIndexKHR): VkVideoEncodeAV1QIndexKHR;
    sizeof(): number;
}