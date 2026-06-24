import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineBinaryHandlesInfoKHR extends Struct<VkPipelineBinaryHandlesInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIPELINEBINARYCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPIPELINEBINARIES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineBinaryHandlesInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineBinaryHandlesInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineBinaryHandlesInfoKHR;
    static create(paramarg0: number): VkPipelineBinaryHandlesInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineBinaryHandlesInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineBinaryHandlesInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineBinaryHandlesInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPipelineBinaries(paramarg0: number): LongBuffer;
    static npPipelineBinaries(paramarg0: number, paramarg1: LongBuffer): void;
    static npipelineBinaryCount(paramarg0: number): number;
    static npipelineBinaryCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineBinaryHandlesInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPipelineBinaryHandlesInfoKHR;
    pPipelineBinaries(): LongBuffer;
    pPipelineBinaries(arg0: LongBuffer): VkPipelineBinaryHandlesInfoKHR;
    pipelineBinaryCount(): number;
    pipelineBinaryCount(arg0: number): VkPipelineBinaryHandlesInfoKHR;
    sType(): number;
    sType(arg0: number): VkPipelineBinaryHandlesInfoKHR;
    sType$Default(): VkPipelineBinaryHandlesInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer): VkPipelineBinaryHandlesInfoKHR;
    set(arg0: VkPipelineBinaryHandlesInfoKHR): VkPipelineBinaryHandlesInfoKHR;
    sizeof(): number;
}