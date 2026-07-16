import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkOffset2D } from '../../../org/lwjgl/vulkan/VkOffset2D.d.ts'
export class VkDisplayPlaneCapabilitiesKHR extends Struct<VkDisplayPlaneCapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDSTEXTENT: number;
    static MAXDSTPOSITION: number;
    static MAXSRCEXTENT: number;
    static MAXSRCPOSITION: number;
    static MINDSTEXTENT: number;
    static MINDSTPOSITION: number;
    static MINSRCEXTENT: number;
    static MINSRCPOSITION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SUPPORTEDALPHA: number;
    static calloc(): VkDisplayPlaneCapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkDisplayPlaneCapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDisplayPlaneCapabilitiesKHR;
    static create(paramarg0: number): VkDisplayPlaneCapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDisplayPlaneCapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDisplayPlaneCapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkDisplayPlaneCapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxDstExtent(paramarg0: number): VkExtent2D;
    static nmaxDstPosition(paramarg0: number): VkOffset2D;
    static nmaxSrcExtent(paramarg0: number): VkExtent2D;
    static nmaxSrcPosition(paramarg0: number): VkOffset2D;
    static nminDstExtent(paramarg0: number): VkExtent2D;
    static nminDstPosition(paramarg0: number): VkOffset2D;
    static nminSrcExtent(paramarg0: number): VkExtent2D;
    static nminSrcPosition(paramarg0: number): VkOffset2D;
    static nsupportedAlpha(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDisplayPlaneCapabilitiesKHR;
    maxDstExtent(): VkExtent2D;
    maxDstPosition(): VkOffset2D;
    maxSrcExtent(): VkExtent2D;
    maxSrcPosition(): VkOffset2D;
    minDstExtent(): VkExtent2D;
    minDstPosition(): VkOffset2D;
    minSrcExtent(): VkExtent2D;
    minSrcPosition(): VkOffset2D;
    sizeof(): number;
    supportedAlpha(): number;
}