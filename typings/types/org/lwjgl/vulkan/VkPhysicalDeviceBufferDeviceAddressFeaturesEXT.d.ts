import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceBufferDeviceAddressFeaturesEXT extends Struct<VkPhysicalDeviceBufferDeviceAddressFeaturesEXT> implements NativeResource {
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
    static calloc(): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
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
    bufferDeviceAddress(arg0: boolean): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    bufferDeviceAddressCaptureReplay(): boolean;
    bufferDeviceAddressCaptureReplay(arg0: boolean): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    bufferDeviceAddressMultiDevice(): boolean;
    bufferDeviceAddressMultiDevice(arg0: boolean): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    sType$Default(): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    set(arg0: VkPhysicalDeviceBufferDeviceAddressFeaturesEXT): VkPhysicalDeviceBufferDeviceAddressFeaturesEXT;
    sizeof(): number;
}