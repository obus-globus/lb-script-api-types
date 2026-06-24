import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceOpacityMicromapFeaturesEXT extends Struct<VkPhysicalDeviceOpacityMicromapFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MICROMAP: number;
    static MICROMAPCAPTUREREPLAY: number;
    static MICROMAPHOSTCOMMANDS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmicromap(paramarg0: number): number;
    static nmicromap(paramarg0: number, paramarg1: number): void;
    static nmicromapCaptureReplay(paramarg0: number): number;
    static nmicromapCaptureReplay(paramarg0: number, paramarg1: number): void;
    static nmicromapHostCommands(paramarg0: number): number;
    static nmicromapHostCommands(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    micromap(): boolean;
    micromap(arg0: boolean): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    micromapCaptureReplay(): boolean;
    micromapCaptureReplay(arg0: boolean): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    micromapHostCommands(): boolean;
    micromapHostCommands(arg0: boolean): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    sType$Default(): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    set(arg0: VkPhysicalDeviceOpacityMicromapFeaturesEXT): VkPhysicalDeviceOpacityMicromapFeaturesEXT;
    sizeof(): number;
}