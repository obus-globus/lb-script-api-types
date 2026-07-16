import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV extends Struct<VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTSHADINGRATEENUMS: number;
    static NOINVOCATIONFRAGMENTSHADINGRATES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUPERSAMPLEFRAGMENTSHADINGRATES: number;
    static calloc(): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfragmentShadingRateEnums(paramarg0: number): number;
    static nfragmentShadingRateEnums(paramarg0: number, paramarg1: number): void;
    static nnoInvocationFragmentShadingRates(paramarg0: number): number;
    static nnoInvocationFragmentShadingRates(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsupersampleFragmentShadingRates(paramarg0: number): number;
    static nsupersampleFragmentShadingRates(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    fragmentShadingRateEnums(): boolean;
    fragmentShadingRateEnums(arg0: boolean): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    noInvocationFragmentShadingRates(): boolean;
    noInvocationFragmentShadingRates(arg0: boolean): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    sType$Default(): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    set(arg0: VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
    sizeof(): number;
    supersampleFragmentShadingRates(): boolean;
    supersampleFragmentShadingRates(arg0: boolean): VkPhysicalDeviceFragmentShadingRateEnumsFeaturesNV;
}