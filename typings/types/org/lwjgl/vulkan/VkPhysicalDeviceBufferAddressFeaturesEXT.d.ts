import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceBufferDeviceAddressFeaturesEXT } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceBufferDeviceAddressFeaturesEXT.d.ts'
export class VkPhysicalDeviceBufferAddressFeaturesEXT extends VkPhysicalDeviceBufferDeviceAddressFeaturesEXT {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERDEVICEADDRESS: number;
    static BUFFERDEVICEADDRESSCAPTUREREPLAY: number;
    static BUFFERDEVICEADDRESSMULTIDEVICE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceBufferAddressFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceBufferAddressFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static create(): VkPhysicalDeviceBufferAddressFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceBufferAddressFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static createSafe(paramarg0: number): VkPhysicalDeviceBufferAddressFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static malloc(): VkPhysicalDeviceBufferAddressFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceBufferAddressFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static nbufferDeviceAddress(paramarg0: number): number;
    static nbufferDeviceAddress(paramarg0: number, paramarg1: number): void;
    static nbufferDeviceAddressCaptureReplay(paramarg0: number): number;
    static nbufferDeviceAddressCaptureReplay(paramarg0: number, paramarg1: number): void;
    static nbufferDeviceAddressMultiDevice(paramarg0: number): number;
    static nbufferDeviceAddressMultiDevice(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferDeviceAddress(): boolean;
    bufferDeviceAddress(arg0: boolean): VkPhysicalDeviceBufferAddressFeaturesEXT;
    bufferDeviceAddressCaptureReplay(): boolean;
    bufferDeviceAddressCaptureReplay(arg0: boolean): VkPhysicalDeviceBufferAddressFeaturesEXT;
    bufferDeviceAddressMultiDevice(): boolean;
    bufferDeviceAddressMultiDevice(arg0: boolean): VkPhysicalDeviceBufferAddressFeaturesEXT;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceBufferAddressFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceBufferAddressFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceBufferAddressFeaturesEXT;
    sType$Default(): VkPhysicalDeviceBufferAddressFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceBufferAddressFeaturesEXT;
    set(arg0: VkPhysicalDeviceBufferAddressFeaturesEXT): VkPhysicalDeviceBufferAddressFeaturesEXT;
    set(arg0: VkPhysicalDeviceBufferDeviceAddressFeaturesEXT): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
}