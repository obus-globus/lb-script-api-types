import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineExecutableInfoKHR extends Struct<VkPipelineExecutableInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXECUTABLEINDEX: number;
    static PIPELINE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineExecutableInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineExecutableInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineExecutableInfoKHR;
    static create(paramarg0: number): VkPipelineExecutableInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineExecutableInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineExecutableInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineExecutableInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nexecutableIndex(paramarg0: number): number;
    static nexecutableIndex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipeline(paramarg0: number): number;
    static npipeline(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineExecutableInfoKHR;
    executableIndex(): number;
    executableIndex(arg0: number): VkPipelineExecutableInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPipelineExecutableInfoKHR;
    pipeline(): number;
    pipeline(arg0: number): VkPipelineExecutableInfoKHR;
    sType(): number;
    sType(arg0: number): VkPipelineExecutableInfoKHR;
    sType$Default(): VkPipelineExecutableInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkPipelineExecutableInfoKHR;
    set(arg0: VkPipelineExecutableInfoKHR): VkPipelineExecutableInfoKHR;
    sizeof(): number;
}