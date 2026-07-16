import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceExtendedDynamicState2FeaturesEXT extends Struct<VkPhysicalDeviceExtendedDynamicState2FeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTENDEDDYNAMICSTATE2: number;
    static EXTENDEDDYNAMICSTATE2LOGICOP: number;
    static EXTENDEDDYNAMICSTATE2PATCHCONTROLPOINTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nextendedDynamicState2(paramarg0: number): number;
    static nextendedDynamicState2(paramarg0: number, paramarg1: number): void;
    static nextendedDynamicState2LogicOp(paramarg0: number): number;
    static nextendedDynamicState2LogicOp(paramarg0: number, paramarg1: number): void;
    static nextendedDynamicState2PatchControlPoints(paramarg0: number): number;
    static nextendedDynamicState2PatchControlPoints(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    extendedDynamicState2(): boolean;
    extendedDynamicState2(arg0: boolean): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    extendedDynamicState2LogicOp(): boolean;
    extendedDynamicState2LogicOp(arg0: boolean): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    extendedDynamicState2PatchControlPoints(): boolean;
    extendedDynamicState2PatchControlPoints(arg0: boolean): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    sType$Default(): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    set(arg0: VkPhysicalDeviceExtendedDynamicState2FeaturesEXT): VkPhysicalDeviceExtendedDynamicState2FeaturesEXT;
    sizeof(): number;
}