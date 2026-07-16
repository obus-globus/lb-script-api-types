import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineBinaryDataKHR extends Struct<VkPipelineBinaryDataKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATASIZE: number;
    static PDATA: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkPipelineBinaryDataKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineBinaryDataKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineBinaryDataKHR;
    static create(paramarg0: number): VkPipelineBinaryDataKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineBinaryDataKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineBinaryDataKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineBinaryDataKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndataSize(paramarg0: number): number;
    static ndataSize(paramarg0: number, paramarg1: number): void;
    static npData(paramarg0: number): ByteBuffer;
    static npData(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineBinaryDataKHR;
    dataSize(): number;
    pData(): ByteBuffer;
    pData(arg0: ByteBuffer): VkPipelineBinaryDataKHR;
    set(arg0: VkPipelineBinaryDataKHR): VkPipelineBinaryDataKHR;
    sizeof(): number;
}