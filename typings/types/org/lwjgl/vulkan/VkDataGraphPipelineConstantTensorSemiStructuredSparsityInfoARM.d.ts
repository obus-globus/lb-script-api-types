import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM extends Struct<VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DIMENSION: number;
    static GROUPSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static ZEROCOUNT: number;
    static calloc(): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    static create(paramarg0: number): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndimension(paramarg0: number): number;
    static ndimension(paramarg0: number, paramarg1: number): void;
    static ngroupSize(paramarg0: number): number;
    static ngroupSize(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nzeroCount(paramarg0: number): number;
    static nzeroCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    dimension(): number;
    dimension(arg0: number): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    groupSize(): number;
    groupSize(arg0: number): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    sType$Default(): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    set(arg0: VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
    sizeof(): number;
    zeroCount(): number;
    zeroCount(arg0: number): VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM;
}