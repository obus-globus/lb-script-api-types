import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMaintenance10PropertiesKHR extends Struct<VkPhysicalDeviceMaintenance10PropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOLVESRGBFORMATAPPLIESTRANSFERFUNCTION: number;
    static RESOLVESRGBFORMATSUPPORTSTRANSFERFUNCTIONCONTROL: number;
    static RGBA4OPAQUEBLACKSWIZZLED: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance10PropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance10PropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance10PropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance10PropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance10PropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance10PropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance10PropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nresolveSrgbFormatAppliesTransferFunction(paramarg0: number): number;
    static nresolveSrgbFormatSupportsTransferFunctionControl(paramarg0: number): number;
    static nrgba4OpaqueBlackSwizzled(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance10PropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance10PropertiesKHR;
    resolveSrgbFormatAppliesTransferFunction(): boolean;
    resolveSrgbFormatSupportsTransferFunctionControl(): boolean;
    rgba4OpaqueBlackSwizzled(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance10PropertiesKHR;
    sType$Default(): VkPhysicalDeviceMaintenance10PropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceMaintenance10PropertiesKHR;
    set(arg0: VkPhysicalDeviceMaintenance10PropertiesKHR): VkPhysicalDeviceMaintenance10PropertiesKHR;
    sizeof(): number;
}