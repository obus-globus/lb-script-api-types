import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPartitionedAccelerationStructureInstancesInputNV } from '../../../org/lwjgl/vulkan/VkPartitionedAccelerationStructureInstancesInputNV.d.ts'
export class VkBuildPartitionedAccelerationStructureInfoNV extends Struct<VkBuildPartitionedAccelerationStructureInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCELERATIONSTRUCTUREDATA: number;
    static INPUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SCRATCHDATA: number;
    static SIZEOF: number;
    static SRCACCELERATIONSTRUCTUREDATA: number;
    static SRCINFOS: number;
    static SRCINFOSCOUNT: number;
    static STYPE: number;
    static calloc(): VkBuildPartitionedAccelerationStructureInfoNV;
    static calloc(paramarg0: MemoryStack): VkBuildPartitionedAccelerationStructureInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBuildPartitionedAccelerationStructureInfoNV;
    static create(paramarg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBuildPartitionedAccelerationStructureInfoNV;
    static malloc(paramarg0: MemoryStack): VkBuildPartitionedAccelerationStructureInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstAccelerationStructureData(paramarg0: number): number;
    static ndstAccelerationStructureData(paramarg0: number, paramarg1: number): void;
    static ninput(paramarg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    static ninput(paramarg0: number, paramarg1: VkPartitionedAccelerationStructureInstancesInputNV): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscratchData(paramarg0: number): number;
    static nscratchData(paramarg0: number, paramarg1: number): void;
    static nsrcAccelerationStructureData(paramarg0: number): number;
    static nsrcAccelerationStructureData(paramarg0: number, paramarg1: number): void;
    static nsrcInfos(paramarg0: number): number;
    static nsrcInfos(paramarg0: number, paramarg1: number): void;
    static nsrcInfosCount(paramarg0: number): number;
    static nsrcInfosCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBuildPartitionedAccelerationStructureInfoNV;
    dstAccelerationStructureData(): number;
    dstAccelerationStructureData(arg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
    input(): VkPartitionedAccelerationStructureInstancesInputNV;
    input(arg0: (param0: VkPartitionedAccelerationStructureInstancesInputNV) => void): VkBuildPartitionedAccelerationStructureInfoNV;
    input(arg0: VkPartitionedAccelerationStructureInstancesInputNV): VkBuildPartitionedAccelerationStructureInfoNV;
    pNext(): number;
    pNext(arg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
    sType(): number;
    sType(arg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
    sType$Default(): VkBuildPartitionedAccelerationStructureInfoNV;
    scratchData(): number;
    scratchData(arg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
    set(arg0: number, arg1: number, arg2: VkPartitionedAccelerationStructureInstancesInputNV, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): VkBuildPartitionedAccelerationStructureInfoNV;
    set(arg0: VkBuildPartitionedAccelerationStructureInfoNV): VkBuildPartitionedAccelerationStructureInfoNV;
    sizeof(): number;
    srcAccelerationStructureData(): number;
    srcAccelerationStructureData(arg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
    srcInfos(): number;
    srcInfos(arg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
    srcInfosCount(): number;
    srcInfosCount(arg0: number): VkBuildPartitionedAccelerationStructureInfoNV;
}