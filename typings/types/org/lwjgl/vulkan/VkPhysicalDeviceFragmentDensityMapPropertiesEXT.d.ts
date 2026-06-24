import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkPhysicalDeviceFragmentDensityMapPropertiesEXT extends Struct<VkPhysicalDeviceFragmentDensityMapPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTDENSITYINVOCATIONS: number;
    static MAXFRAGMENTDENSITYTEXELSIZE: number;
    static MINFRAGMENTDENSITYTEXELSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfragmentDensityInvocations(paramarg0: number): number;
    static nmaxFragmentDensityTexelSize(paramarg0: number): VkExtent2D;
    static nminFragmentDensityTexelSize(paramarg0: number): VkExtent2D;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    fragmentDensityInvocations(): boolean;
    maxFragmentDensityTexelSize(): VkExtent2D;
    minFragmentDensityTexelSize(): VkExtent2D;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    sType$Default(): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    set(arg0: VkPhysicalDeviceFragmentDensityMapPropertiesEXT): VkPhysicalDeviceFragmentDensityMapPropertiesEXT;
    sizeof(): number;
}