import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineBinaryKeysAndDataKHR extends Struct<VkPipelineBinaryKeysAndDataKHR> implements NativeResource {
    static ALIGNOF: number;
    static BINARYCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPIPELINEBINARYDATA: number;
    static PPIPELINEBINARYKEYS: number;
    static SIZEOF: number;
    static calloc(): VkPipelineBinaryKeysAndDataKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineBinaryKeysAndDataKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineBinaryKeysAndDataKHR;
    static create(paramarg0: number): VkPipelineBinaryKeysAndDataKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineBinaryKeysAndDataKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineBinaryKeysAndDataKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineBinaryKeysAndDataKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbinaryCount(paramarg0: number): number;
    static nbinaryCount(paramarg0: number, paramarg1: number): void;
    static npPipelineBinaryData(paramarg0: number): (Object | null)[];
    static npPipelineBinaryData(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npPipelineBinaryKeys(paramarg0: number): (Object | null)[];
    static npPipelineBinaryKeys(paramarg0: number, paramarg1: (Object | null)[]): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binaryCount(): number;
    binaryCount(arg0: number): VkPipelineBinaryKeysAndDataKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineBinaryKeysAndDataKHR;
    pPipelineBinaryData(): (Object | null)[];
    pPipelineBinaryData(arg0: (Object | null)[]): VkPipelineBinaryKeysAndDataKHR;
    pPipelineBinaryKeys(): (Object | null)[];
    pPipelineBinaryKeys(arg0: (Object | null)[]): VkPipelineBinaryKeysAndDataKHR;
    set(arg0: number, arg1: (Object | null)[], arg2: (Object | null)[]): VkPipelineBinaryKeysAndDataKHR;
    set(arg0: VkPipelineBinaryKeysAndDataKHR): VkPipelineBinaryKeysAndDataKHR;
    sizeof(): number;
}