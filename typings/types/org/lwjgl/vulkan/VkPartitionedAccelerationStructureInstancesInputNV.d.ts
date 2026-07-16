import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPartitionedAccelerationStructureFlagsNV } from '../../../org/lwjgl/vulkan/VkPartitionedAccelerationStructureFlagsNV.d.ts'
export class VkPartitionedAccelerationStructureInstancesInputNV extends Struct<VkPartitionedAccelerationStructureInstancesInputNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static INSTANCECOUNT: number;
    static MAXINSTANCEINGLOBALPARTITIONCOUNT: number;
    static MAXINSTANCEPERPARTITIONCOUNT: number;
    static PARTITIONCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPartitionedAccelerationStructureInstancesInputNV;
    static calloc(paramarg0: MemoryStack): VkPartitionedAccelerationStructureInstancesInputNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPartitionedAccelerationStructureInstancesInputNV;
    static create(paramarg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPartitionedAccelerationStructureInstancesInputNV;
    static malloc(paramarg0: MemoryStack): VkPartitionedAccelerationStructureInstancesInputNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ninstanceCount(paramarg0: number): number;
    static ninstanceCount(paramarg0: number, paramarg1: number): void;
    static nmaxInstanceInGlobalPartitionCount(paramarg0: number): number;
    static nmaxInstanceInGlobalPartitionCount(paramarg0: number, paramarg1: number): void;
    static nmaxInstancePerPartitionCount(paramarg0: number): number;
    static nmaxInstancePerPartitionCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npartitionCount(paramarg0: number): number;
    static npartitionCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPartitionedAccelerationStructureInstancesInputNV;
    flags(): number;
    flags(arg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    instanceCount(): number;
    instanceCount(arg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    maxInstanceInGlobalPartitionCount(): number;
    maxInstanceInGlobalPartitionCount(arg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    maxInstancePerPartitionCount(): number;
    maxInstancePerPartitionCount(arg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    pNext(): number;
    pNext(arg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    pNext(arg0: VkPartitionedAccelerationStructureFlagsNV): VkPartitionedAccelerationStructureInstancesInputNV;
    partitionCount(): number;
    partitionCount(arg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    sType(): number;
    sType(arg0: number): VkPartitionedAccelerationStructureInstancesInputNV;
    sType$Default(): VkPartitionedAccelerationStructureInstancesInputNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkPartitionedAccelerationStructureInstancesInputNV;
    set(arg0: VkPartitionedAccelerationStructureInstancesInputNV): VkPartitionedAccelerationStructureInstancesInputNV;
    sizeof(): number;
}