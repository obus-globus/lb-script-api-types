import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkTensorDescriptionARM } from '../../../org/lwjgl/vulkan/VkTensorDescriptionARM.d.ts'
export class VkDataGraphPipelineResourceInfoARM extends Struct<VkDataGraphPipelineResourceInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static ARRAYELEMENT: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineResourceInfoARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineResourceInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineResourceInfoARM;
    static create(paramarg0: number): VkDataGraphPipelineResourceInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineResourceInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineResourceInfoARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineResourceInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static narrayElement(paramarg0: number): number;
    static narrayElement(paramarg0: number, paramarg1: number): void;
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static ndescriptorSet(paramarg0: number): number;
    static ndescriptorSet(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    arrayElement(): number;
    arrayElement(arg0: number): VkDataGraphPipelineResourceInfoARM;
    binding(): number;
    binding(arg0: number): VkDataGraphPipelineResourceInfoARM;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineResourceInfoARM;
    descriptorSet(): number;
    descriptorSet(arg0: number): VkDataGraphPipelineResourceInfoARM;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineResourceInfoARM;
    pNext(arg0: VkTensorDescriptionARM): VkDataGraphPipelineResourceInfoARM;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineResourceInfoARM;
    sType$Default(): VkDataGraphPipelineResourceInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkDataGraphPipelineResourceInfoARM;
    set(arg0: VkDataGraphPipelineResourceInfoARM): VkDataGraphPipelineResourceInfoARM;
    sizeof(): number;
}