import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceGroupDeviceCreateInfo extends Struct<VkDeviceGroupDeviceCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PHYSICALDEVICECOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPHYSICALDEVICES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceGroupDeviceCreateInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupDeviceCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceGroupDeviceCreateInfo;
    static create(paramarg0: number): VkDeviceGroupDeviceCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceGroupDeviceCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceGroupDeviceCreateInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupDeviceCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPhysicalDevices(paramarg0: number): PointerBuffer;
    static npPhysicalDevices(paramarg0: number, paramarg1: PointerBuffer): void;
    static nphysicalDeviceCount(paramarg0: number): number;
    static nphysicalDeviceCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceGroupDeviceCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkDeviceGroupDeviceCreateInfo;
    pPhysicalDevices(): PointerBuffer;
    pPhysicalDevices(arg0: PointerBuffer): VkDeviceGroupDeviceCreateInfo;
    physicalDeviceCount(): number;
    sType(): number;
    sType(arg0: number): VkDeviceGroupDeviceCreateInfo;
    sType$Default(): VkDeviceGroupDeviceCreateInfo;
    set(arg0: number, arg1: number, arg2: PointerBuffer): VkDeviceGroupDeviceCreateInfo;
    set(arg0: VkDeviceGroupDeviceCreateInfo): VkDeviceGroupDeviceCreateInfo;
    sizeof(): number;
}