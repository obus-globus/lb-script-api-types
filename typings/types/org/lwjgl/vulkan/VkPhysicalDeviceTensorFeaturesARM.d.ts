import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceTensorFeaturesARM extends Struct<VkPhysicalDeviceTensorFeaturesARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORBINDINGSTORAGETENSORUPDATEAFTERBIND: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERSTORAGETENSORARRAYDYNAMICINDEXING: number;
    static SHADERSTORAGETENSORARRAYNONUNIFORMINDEXING: number;
    static SHADERTENSORACCESS: number;
    static SIZEOF: number;
    static STYPE: number;
    static TENSORNONPACKED: number;
    static TENSORS: number;
    static calloc(): VkPhysicalDeviceTensorFeaturesARM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTensorFeaturesARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceTensorFeaturesARM;
    static create(paramarg0: number): VkPhysicalDeviceTensorFeaturesARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTensorFeaturesARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceTensorFeaturesARM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTensorFeaturesARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorBindingStorageTensorUpdateAfterBind(paramarg0: number): number;
    static ndescriptorBindingStorageTensorUpdateAfterBind(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderStorageTensorArrayDynamicIndexing(paramarg0: number): number;
    static nshaderStorageTensorArrayDynamicIndexing(paramarg0: number, paramarg1: number): void;
    static nshaderStorageTensorArrayNonUniformIndexing(paramarg0: number): number;
    static nshaderStorageTensorArrayNonUniformIndexing(paramarg0: number, paramarg1: number): void;
    static nshaderTensorAccess(paramarg0: number): number;
    static nshaderTensorAccess(paramarg0: number, paramarg1: number): void;
    static ntensorNonPacked(paramarg0: number): number;
    static ntensorNonPacked(paramarg0: number, paramarg1: number): void;
    static ntensors(paramarg0: number): number;
    static ntensors(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceTensorFeaturesARM;
    descriptorBindingStorageTensorUpdateAfterBind(): boolean;
    descriptorBindingStorageTensorUpdateAfterBind(arg0: boolean): VkPhysicalDeviceTensorFeaturesARM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceTensorFeaturesARM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceTensorFeaturesARM;
    sType$Default(): VkPhysicalDeviceTensorFeaturesARM;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): VkPhysicalDeviceTensorFeaturesARM;
    set(arg0: VkPhysicalDeviceTensorFeaturesARM): VkPhysicalDeviceTensorFeaturesARM;
    shaderStorageTensorArrayDynamicIndexing(): boolean;
    shaderStorageTensorArrayDynamicIndexing(arg0: boolean): VkPhysicalDeviceTensorFeaturesARM;
    shaderStorageTensorArrayNonUniformIndexing(): boolean;
    shaderStorageTensorArrayNonUniformIndexing(arg0: boolean): VkPhysicalDeviceTensorFeaturesARM;
    shaderTensorAccess(): boolean;
    shaderTensorAccess(arg0: boolean): VkPhysicalDeviceTensorFeaturesARM;
    sizeof(): number;
    tensorNonPacked(): boolean;
    tensorNonPacked(arg0: boolean): VkPhysicalDeviceTensorFeaturesARM;
    tensors(): boolean;
    tensors(arg0: boolean): VkPhysicalDeviceTensorFeaturesARM;
}