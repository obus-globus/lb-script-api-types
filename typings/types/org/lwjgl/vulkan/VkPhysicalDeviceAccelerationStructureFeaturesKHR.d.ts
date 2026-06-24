import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceAccelerationStructureFeaturesKHR extends Struct<VkPhysicalDeviceAccelerationStructureFeaturesKHR> implements NativeResource {
    static ACCELERATIONSTRUCTURE: number;
    static ACCELERATIONSTRUCTURECAPTUREREPLAY: number;
    static ACCELERATIONSTRUCTUREHOSTCOMMANDS: number;
    static ACCELERATIONSTRUCTUREINDIRECTBUILD: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORBINDINGACCELERATIONSTRUCTUREUPDATEAFTERBIND: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naccelerationStructure(paramarg0: number): number;
    static naccelerationStructure(paramarg0: number, paramarg1: number): void;
    static naccelerationStructureCaptureReplay(paramarg0: number): number;
    static naccelerationStructureCaptureReplay(paramarg0: number, paramarg1: number): void;
    static naccelerationStructureHostCommands(paramarg0: number): number;
    static naccelerationStructureHostCommands(paramarg0: number, paramarg1: number): void;
    static naccelerationStructureIndirectBuild(paramarg0: number): number;
    static naccelerationStructureIndirectBuild(paramarg0: number, paramarg1: number): void;
    static ndescriptorBindingAccelerationStructureUpdateAfterBind(paramarg0: number): number;
    static ndescriptorBindingAccelerationStructureUpdateAfterBind(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructure(): boolean;
    accelerationStructure(arg0: boolean): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    accelerationStructureCaptureReplay(): boolean;
    accelerationStructureCaptureReplay(arg0: boolean): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    accelerationStructureHostCommands(): boolean;
    accelerationStructureHostCommands(arg0: boolean): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    accelerationStructureIndirectBuild(): boolean;
    accelerationStructureIndirectBuild(arg0: boolean): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    descriptorBindingAccelerationStructureUpdateAfterBind(): boolean;
    descriptorBindingAccelerationStructureUpdateAfterBind(arg0: boolean): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    sType$Default(): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    set(arg0: VkPhysicalDeviceAccelerationStructureFeaturesKHR): VkPhysicalDeviceAccelerationStructureFeaturesKHR;
    sizeof(): number;
}