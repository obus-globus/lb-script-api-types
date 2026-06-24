import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM.d.ts'
import type { VkTensorDescriptionARM } from '../../../org/lwjgl/vulkan/VkTensorDescriptionARM.d.ts'
export class VkDataGraphPipelineConstantARM extends Struct<VkDataGraphPipelineConstantARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ID: number;
    static PCONSTANTDATA: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineConstantARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineConstantARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineConstantARM;
    static create(paramarg0: number): VkDataGraphPipelineConstantARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineConstantARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineConstantARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineConstantARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nid(paramarg0: number): number;
    static nid(paramarg0: number, paramarg1: number): void;
    static npConstantData(paramarg0: number): number;
    static npConstantData(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineConstantARM;
    id(): number;
    id(arg0: number): VkDataGraphPipelineConstantARM;
    pConstantData(): number;
    pConstantData(arg0: number): VkDataGraphPipelineConstantARM;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineConstantARM;
    pNext(arg0: VkDataGraphPipelineConstantTensorSemiStructuredSparsityInfoARM): VkDataGraphPipelineConstantARM;
    pNext(arg0: VkTensorDescriptionARM): VkDataGraphPipelineConstantARM;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineConstantARM;
    sType$Default(): VkDataGraphPipelineConstantARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkDataGraphPipelineConstantARM;
    set(arg0: VkDataGraphPipelineConstantARM): VkDataGraphPipelineConstantARM;
    sizeof(): number;
}