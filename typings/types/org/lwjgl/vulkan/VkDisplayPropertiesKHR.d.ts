import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkDisplayPropertiesKHR extends Struct<VkDisplayPropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAY: number;
    static DISPLAYNAME: number;
    static PERSISTENTCONTENT: number;
    static PHYSICALDIMENSIONS: number;
    static PHYSICALRESOLUTION: number;
    static PLANEREORDERPOSSIBLE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SUPPORTEDTRANSFORMS: number;
    static calloc(): VkDisplayPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkDisplayPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDisplayPropertiesKHR;
    static create(paramarg0: number): VkDisplayPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDisplayPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDisplayPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkDisplayPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisplay(paramarg0: number): number;
    static ndisplayName(paramarg0: number): ByteBuffer;
    static ndisplayNameString(paramarg0: number): string;
    static npersistentContent(paramarg0: number): number;
    static nphysicalDimensions(paramarg0: number): VkExtent2D;
    static nphysicalResolution(paramarg0: number): VkExtent2D;
    static nplaneReorderPossible(paramarg0: number): number;
    static nsupportedTransforms(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDisplayPropertiesKHR;
    display(): number;
    displayName(): ByteBuffer;
    displayNameString(): string;
    persistentContent(): boolean;
    physicalDimensions(): VkExtent2D;
    physicalResolution(): VkExtent2D;
    planeReorderPossible(): boolean;
    sizeof(): number;
    supportedTransforms(): number;
}