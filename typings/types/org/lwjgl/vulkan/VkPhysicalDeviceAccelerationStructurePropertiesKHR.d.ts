import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceAccelerationStructurePropertiesKHR extends Struct<VkPhysicalDeviceAccelerationStructurePropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDESCRIPTORSETACCELERATIONSTRUCTURES: number;
    static MAXDESCRIPTORSETUPDATEAFTERBINDACCELERATIONSTRUCTURES: number;
    static MAXGEOMETRYCOUNT: number;
    static MAXINSTANCECOUNT: number;
    static MAXPERSTAGEDESCRIPTORACCELERATIONSTRUCTURES: number;
    static MAXPERSTAGEDESCRIPTORUPDATEAFTERBINDACCELERATIONSTRUCTURES: number;
    static MAXPRIMITIVECOUNT: number;
    static MINACCELERATIONSTRUCTURESCRATCHOFFSETALIGNMENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxDescriptorSetAccelerationStructures(paramarg0: number): number;
    static nmaxDescriptorSetUpdateAfterBindAccelerationStructures(paramarg0: number): number;
    static nmaxGeometryCount(paramarg0: number): number;
    static nmaxInstanceCount(paramarg0: number): number;
    static nmaxPerStageDescriptorAccelerationStructures(paramarg0: number): number;
    static nmaxPerStageDescriptorUpdateAfterBindAccelerationStructures(paramarg0: number): number;
    static nmaxPrimitiveCount(paramarg0: number): number;
    static nminAccelerationStructureScratchOffsetAlignment(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    maxDescriptorSetAccelerationStructures(): number;
    maxDescriptorSetUpdateAfterBindAccelerationStructures(): number;
    maxGeometryCount(): number;
    maxInstanceCount(): number;
    maxPerStageDescriptorAccelerationStructures(): number;
    maxPerStageDescriptorUpdateAfterBindAccelerationStructures(): number;
    maxPrimitiveCount(): number;
    minAccelerationStructureScratchOffsetAlignment(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    sType$Default(): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    set(arg0: VkPhysicalDeviceAccelerationStructurePropertiesKHR): VkPhysicalDeviceAccelerationStructurePropertiesKHR;
    sizeof(): number;
}