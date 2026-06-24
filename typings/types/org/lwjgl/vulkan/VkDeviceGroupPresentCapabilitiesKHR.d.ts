import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceGroupPresentCapabilitiesKHR extends Struct<VkDeviceGroupPresentCapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MODES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTMASK: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceGroupPresentCapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkDeviceGroupPresentCapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceGroupPresentCapabilitiesKHR;
    static create(paramarg0: number): VkDeviceGroupPresentCapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceGroupPresentCapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceGroupPresentCapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkDeviceGroupPresentCapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmodes(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentMask(paramarg0: number, paramarg1: number): number;
    static npresentMask(paramarg0: number): IntBuffer;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceGroupPresentCapabilitiesKHR;
    modes(): number;
    pNext(): number;
    pNext(arg0: number): VkDeviceGroupPresentCapabilitiesKHR;
    presentMask(): IntBuffer;
    presentMask(arg0: number): number;
    sType(): number;
    sType(arg0: number): VkDeviceGroupPresentCapabilitiesKHR;
    sType$Default(): VkDeviceGroupPresentCapabilitiesKHR;
    set(arg0: number, arg1: number): VkDeviceGroupPresentCapabilitiesKHR;
    set(arg0: VkDeviceGroupPresentCapabilitiesKHR): VkDeviceGroupPresentCapabilitiesKHR;
    sizeof(): number;
}