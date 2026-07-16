import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkExecutionGraphPipelineScratchSizeAMDX extends Struct<VkExecutionGraphPipelineScratchSizeAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXSIZE: number;
    static MINSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEGRANULARITY: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExecutionGraphPipelineScratchSizeAMDX;
    static calloc(paramarg0: MemoryStack): VkExecutionGraphPipelineScratchSizeAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExecutionGraphPipelineScratchSizeAMDX;
    static create(paramarg0: number): VkExecutionGraphPipelineScratchSizeAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExecutionGraphPipelineScratchSizeAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExecutionGraphPipelineScratchSizeAMDX;
    static malloc(paramarg0: MemoryStack): VkExecutionGraphPipelineScratchSizeAMDX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxSize(paramarg0: number): number;
    static nmaxSize(paramarg0: number, paramarg1: number): void;
    static nminSize(paramarg0: number): number;
    static nminSize(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsizeGranularity(paramarg0: number): number;
    static nsizeGranularity(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExecutionGraphPipelineScratchSizeAMDX;
    maxSize(): number;
    maxSize(arg0: number): VkExecutionGraphPipelineScratchSizeAMDX;
    minSize(): number;
    minSize(arg0: number): VkExecutionGraphPipelineScratchSizeAMDX;
    pNext(): number;
    pNext(arg0: number): VkExecutionGraphPipelineScratchSizeAMDX;
    sType(): number;
    sType(arg0: number): VkExecutionGraphPipelineScratchSizeAMDX;
    sType$Default(): VkExecutionGraphPipelineScratchSizeAMDX;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkExecutionGraphPipelineScratchSizeAMDX;
    set(arg0: VkExecutionGraphPipelineScratchSizeAMDX): VkExecutionGraphPipelineScratchSizeAMDX;
    sizeGranularity(): number;
    sizeGranularity(arg0: number): VkExecutionGraphPipelineScratchSizeAMDX;
    sizeof(): number;
}