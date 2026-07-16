import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDisplayPlaneCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkDisplayPlaneCapabilitiesKHR.d.ts'
export class VkDisplayPlaneCapabilities2KHR extends Struct<VkDisplayPlaneCapabilities2KHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CAPABILITIES: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDisplayPlaneCapabilities2KHR;
    static calloc(paramarg0: MemoryStack): VkDisplayPlaneCapabilities2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDisplayPlaneCapabilities2KHR;
    static create(paramarg0: number): VkDisplayPlaneCapabilities2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDisplayPlaneCapabilities2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDisplayPlaneCapabilities2KHR;
    static malloc(paramarg0: MemoryStack): VkDisplayPlaneCapabilities2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncapabilities(paramarg0: number): VkDisplayPlaneCapabilitiesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    capabilities(): VkDisplayPlaneCapabilitiesKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDisplayPlaneCapabilities2KHR;
    pNext(): number;
    pNext(arg0: number): VkDisplayPlaneCapabilities2KHR;
    sType(): number;
    sType(arg0: number): VkDisplayPlaneCapabilities2KHR;
    sType$Default(): VkDisplayPlaneCapabilities2KHR;
    set(arg0: number, arg1: number): VkDisplayPlaneCapabilities2KHR;
    set(arg0: VkDisplayPlaneCapabilities2KHR): VkDisplayPlaneCapabilities2KHR;
    sizeof(): number;
}