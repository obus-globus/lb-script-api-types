import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCubicWeightsFeaturesQCOM extends Struct<VkPhysicalDeviceCubicWeightsFeaturesQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SELECTABLECUBICWEIGHTS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    static create(paramarg0: number): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nselectableCubicWeights(paramarg0: number): number;
    static nselectableCubicWeights(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    sType$Default(): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    selectableCubicWeights(): boolean;
    selectableCubicWeights(arg0: boolean): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    set(arg0: VkPhysicalDeviceCubicWeightsFeaturesQCOM): VkPhysicalDeviceCubicWeightsFeaturesQCOM;
    sizeof(): number;
}