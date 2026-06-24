import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM extends Struct<VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MULTIVIEWPERVIEWVIEWPORTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    static create(paramarg0: number): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmultiviewPerViewViewports(paramarg0: number): number;
    static nmultiviewPerViewViewports(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    multiviewPerViewViewports(): boolean;
    multiviewPerViewViewports(arg0: boolean): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    sType$Default(): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    set(arg0: VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM): VkPhysicalDeviceMultiviewPerViewViewportsFeaturesQCOM;
    sizeof(): number;
}