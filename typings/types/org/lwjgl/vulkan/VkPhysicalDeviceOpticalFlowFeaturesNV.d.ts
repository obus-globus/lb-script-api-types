import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceOpticalFlowFeaturesNV extends Struct<VkPhysicalDeviceOpticalFlowFeaturesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OPTICALFLOW: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceOpticalFlowFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceOpticalFlowFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceOpticalFlowFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceOpticalFlowFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceOpticalFlowFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceOpticalFlowFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceOpticalFlowFeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nopticalFlow(paramarg0: number): number;
    static nopticalFlow(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceOpticalFlowFeaturesNV;
    opticalFlow(): boolean;
    opticalFlow(arg0: boolean): VkPhysicalDeviceOpticalFlowFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceOpticalFlowFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceOpticalFlowFeaturesNV;
    sType$Default(): VkPhysicalDeviceOpticalFlowFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceOpticalFlowFeaturesNV;
    set(arg0: VkPhysicalDeviceOpticalFlowFeaturesNV): VkPhysicalDeviceOpticalFlowFeaturesNV;
    sizeof(): number;
}