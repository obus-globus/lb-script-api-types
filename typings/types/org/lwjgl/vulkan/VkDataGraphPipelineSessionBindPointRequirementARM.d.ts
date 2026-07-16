import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDataGraphPipelineSessionBindPointRequirementARM extends Struct<VkDataGraphPipelineSessionBindPointRequirementARM> implements NativeResource {
    static ALIGNOF: number;
    static BINDPOINT: number;
    static BINDPOINTTYPE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NUMOBJECTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineSessionBindPointRequirementARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineSessionBindPointRequirementARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineSessionBindPointRequirementARM;
    static create(paramarg0: number): VkDataGraphPipelineSessionBindPointRequirementARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineSessionBindPointRequirementARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineSessionBindPointRequirementARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineSessionBindPointRequirementARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbindPoint(paramarg0: number): number;
    static nbindPointType(paramarg0: number): number;
    static nnumObjects(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bindPoint(): number;
    bindPointType(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineSessionBindPointRequirementARM;
    numObjects(): number;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineSessionBindPointRequirementARM;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineSessionBindPointRequirementARM;
    sType$Default(): VkDataGraphPipelineSessionBindPointRequirementARM;
    set(arg0: number, arg1: number): VkDataGraphPipelineSessionBindPointRequirementARM;
    set(arg0: VkDataGraphPipelineSessionBindPointRequirementARM): VkDataGraphPipelineSessionBindPointRequirementARM;
    sizeof(): number;
}