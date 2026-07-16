import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceBufferDeviceAddressFeatures extends Struct<VkPhysicalDeviceBufferDeviceAddressFeatures> implements NativeResource {
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
    static calloc(): VkPhysicalDeviceBufferDeviceAddressFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceBufferDeviceAddressFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceBufferDeviceAddressFeatures;
    static create(paramarg0: number): VkPhysicalDeviceBufferDeviceAddressFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceBufferDeviceAddressFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceBufferDeviceAddressFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceBufferDeviceAddressFeatures;
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
    bufferDeviceAddress(arg0: boolean): VkPhysicalDeviceBufferDeviceAddressFeatures;
    bufferDeviceAddressCaptureReplay(): boolean;
    bufferDeviceAddressCaptureReplay(arg0: boolean): VkPhysicalDeviceBufferDeviceAddressFeatures;
    bufferDeviceAddressMultiDevice(): boolean;
    bufferDeviceAddressMultiDevice(arg0: boolean): VkPhysicalDeviceBufferDeviceAddressFeatures;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceBufferDeviceAddressFeatures;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceBufferDeviceAddressFeatures;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceBufferDeviceAddressFeatures;
    sType$Default(): VkPhysicalDeviceBufferDeviceAddressFeatures;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceBufferDeviceAddressFeatures;
    set(arg0: VkPhysicalDeviceBufferDeviceAddressFeatures): VkPhysicalDeviceBufferDeviceAddressFeatures;
    sizeof(): number;
}