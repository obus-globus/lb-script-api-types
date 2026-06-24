import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDataGraphFeaturesARM extends Struct<VkPhysicalDeviceDataGraphFeaturesARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATAGRAPH: number;
    static DATAGRAPHDESCRIPTORBUFFER: number;
    static DATAGRAPHSHADERMODULE: number;
    static DATAGRAPHSPECIALIZATIONCONSTANTS: number;
    static DATAGRAPHUPDATEAFTERBIND: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDataGraphFeaturesARM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDataGraphFeaturesARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDataGraphFeaturesARM;
    static create(paramarg0: number): VkPhysicalDeviceDataGraphFeaturesARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDataGraphFeaturesARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDataGraphFeaturesARM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDataGraphFeaturesARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndataGraph(paramarg0: number): number;
    static ndataGraph(paramarg0: number, paramarg1: number): void;
    static ndataGraphDescriptorBuffer(paramarg0: number): number;
    static ndataGraphDescriptorBuffer(paramarg0: number, paramarg1: number): void;
    static ndataGraphShaderModule(paramarg0: number): number;
    static ndataGraphShaderModule(paramarg0: number, paramarg1: number): void;
    static ndataGraphSpecializationConstants(paramarg0: number): number;
    static ndataGraphSpecializationConstants(paramarg0: number, paramarg1: number): void;
    static ndataGraphUpdateAfterBind(paramarg0: number): number;
    static ndataGraphUpdateAfterBind(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDataGraphFeaturesARM;
    dataGraph(): boolean;
    dataGraph(arg0: boolean): VkPhysicalDeviceDataGraphFeaturesARM;
    dataGraphDescriptorBuffer(): boolean;
    dataGraphDescriptorBuffer(arg0: boolean): VkPhysicalDeviceDataGraphFeaturesARM;
    dataGraphShaderModule(): boolean;
    dataGraphShaderModule(arg0: boolean): VkPhysicalDeviceDataGraphFeaturesARM;
    dataGraphSpecializationConstants(): boolean;
    dataGraphSpecializationConstants(arg0: boolean): VkPhysicalDeviceDataGraphFeaturesARM;
    dataGraphUpdateAfterBind(): boolean;
    dataGraphUpdateAfterBind(arg0: boolean): VkPhysicalDeviceDataGraphFeaturesARM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDataGraphFeaturesARM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDataGraphFeaturesARM;
    sType$Default(): VkPhysicalDeviceDataGraphFeaturesARM;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): VkPhysicalDeviceDataGraphFeaturesARM;
    set(arg0: VkPhysicalDeviceDataGraphFeaturesARM): VkPhysicalDeviceDataGraphFeaturesARM;
    sizeof(): number;
}