import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDataGraphModelFeaturesQCOM extends Struct<VkPhysicalDeviceDataGraphModelFeaturesQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATAGRAPHMODEL: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    static create(paramarg0: number): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndataGraphModel(paramarg0: number): number;
    static ndataGraphModel(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    dataGraphModel(): boolean;
    dataGraphModel(arg0: boolean): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    sType$Default(): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    set(arg0: VkPhysicalDeviceDataGraphModelFeaturesQCOM): VkPhysicalDeviceDataGraphModelFeaturesQCOM;
    sizeof(): number;
}