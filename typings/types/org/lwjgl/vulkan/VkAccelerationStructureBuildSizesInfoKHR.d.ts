import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkAccelerationStructureBuildSizesInfoKHR extends Struct<VkAccelerationStructureBuildSizesInfoKHR> implements NativeResource {
    static ACCELERATIONSTRUCTURESIZE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUILDSCRATCHSIZE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static UPDATESCRATCHSIZE: number;
    static calloc(): VkAccelerationStructureBuildSizesInfoKHR;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureBuildSizesInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureBuildSizesInfoKHR;
    static create(paramarg0: number): VkAccelerationStructureBuildSizesInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureBuildSizesInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureBuildSizesInfoKHR;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureBuildSizesInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naccelerationStructureSize(paramarg0: number): number;
    static nbuildScratchSize(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nupdateScratchSize(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructureSize(): number;
    buildScratchSize(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureBuildSizesInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureBuildSizesInfoKHR;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureBuildSizesInfoKHR;
    sType$Default(): VkAccelerationStructureBuildSizesInfoKHR;
    set(arg0: number, arg1: number): VkAccelerationStructureBuildSizesInfoKHR;
    set(arg0: VkAccelerationStructureBuildSizesInfoKHR): VkAccelerationStructureBuildSizesInfoKHR;
    sizeof(): number;
    updateScratchSize(): number;
}