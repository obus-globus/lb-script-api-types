import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDataGraphPipelineInfoARM extends Struct<VkDataGraphPipelineInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATAGRAPHPIPELINE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineInfoARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineInfoARM;
    static create(paramarg0: number): VkDataGraphPipelineInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineInfoARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndataGraphPipeline(paramarg0: number): number;
    static ndataGraphPipeline(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineInfoARM;
    dataGraphPipeline(): number;
    dataGraphPipeline(arg0: number): VkDataGraphPipelineInfoARM;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineInfoARM;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineInfoARM;
    sType$Default(): VkDataGraphPipelineInfoARM;
    set(arg0: number, arg1: number, arg2: number): VkDataGraphPipelineInfoARM;
    set(arg0: VkDataGraphPipelineInfoARM): VkDataGraphPipelineInfoARM;
    sizeof(): number;
}