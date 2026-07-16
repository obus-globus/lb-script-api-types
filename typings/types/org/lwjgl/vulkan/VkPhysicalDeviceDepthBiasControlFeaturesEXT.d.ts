import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDepthBiasControlFeaturesEXT extends Struct<VkPhysicalDeviceDepthBiasControlFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTHBIASCONTROL: number;
    static DEPTHBIASEXACT: number;
    static FLOATREPRESENTATION: number;
    static LEASTREPRESENTABLEVALUEFORCEUNORMREPRESENTATION: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndepthBiasControl(paramarg0: number): number;
    static ndepthBiasControl(paramarg0: number, paramarg1: number): void;
    static ndepthBiasExact(paramarg0: number): number;
    static ndepthBiasExact(paramarg0: number, paramarg1: number): void;
    static nfloatRepresentation(paramarg0: number): number;
    static nfloatRepresentation(paramarg0: number, paramarg1: number): void;
    static nleastRepresentableValueForceUnormRepresentation(paramarg0: number): number;
    static nleastRepresentableValueForceUnormRepresentation(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    depthBiasControl(): boolean;
    depthBiasControl(arg0: boolean): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    depthBiasExact(): boolean;
    depthBiasExact(arg0: boolean): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    floatRepresentation(): boolean;
    floatRepresentation(arg0: boolean): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    leastRepresentableValueForceUnormRepresentation(): boolean;
    leastRepresentableValueForceUnormRepresentation(arg0: boolean): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    sType$Default(): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    set(arg0: VkPhysicalDeviceDepthBiasControlFeaturesEXT): VkPhysicalDeviceDepthBiasControlFeaturesEXT;
    sizeof(): number;
}