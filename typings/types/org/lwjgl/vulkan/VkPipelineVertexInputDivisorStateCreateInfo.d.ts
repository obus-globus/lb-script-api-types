import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineVertexInputDivisorStateCreateInfo extends Struct<VkPipelineVertexInputDivisorStateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVERTEXBINDINGDIVISORS: number;
    static SIZEOF: number;
    static STYPE: number;
    static VERTEXBINDINGDIVISORCOUNT: number;
    static calloc(): VkPipelineVertexInputDivisorStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineVertexInputDivisorStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineVertexInputDivisorStateCreateInfo;
    static create(paramarg0: number): VkPipelineVertexInputDivisorStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineVertexInputDivisorStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineVertexInputDivisorStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineVertexInputDivisorStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npVertexBindingDivisors(paramarg0: number): (Object | null)[];
    static npVertexBindingDivisors(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvertexBindingDivisorCount(paramarg0: number): number;
    static nvertexBindingDivisorCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineVertexInputDivisorStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineVertexInputDivisorStateCreateInfo;
    pVertexBindingDivisors(): (Object | null)[];
    pVertexBindingDivisors(arg0: (Object | null)[]): VkPipelineVertexInputDivisorStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineVertexInputDivisorStateCreateInfo;
    sType$Default(): VkPipelineVertexInputDivisorStateCreateInfo;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkPipelineVertexInputDivisorStateCreateInfo;
    set(arg0: VkPipelineVertexInputDivisorStateCreateInfo): VkPipelineVertexInputDivisorStateCreateInfo;
    sizeof(): number;
    vertexBindingDivisorCount(): number;
}