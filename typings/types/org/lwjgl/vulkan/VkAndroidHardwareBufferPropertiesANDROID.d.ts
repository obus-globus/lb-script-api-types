import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAndroidHardwareBufferFormatProperties2ANDROID } from '../../../org/lwjgl/vulkan/VkAndroidHardwareBufferFormatProperties2ANDROID.d.ts'
import type { VkAndroidHardwareBufferFormatPropertiesANDROID } from '../../../org/lwjgl/vulkan/VkAndroidHardwareBufferFormatPropertiesANDROID.d.ts'
import type { VkAndroidHardwareBufferFormatResolvePropertiesANDROID } from '../../../org/lwjgl/vulkan/VkAndroidHardwareBufferFormatResolvePropertiesANDROID.d.ts'
export class VkAndroidHardwareBufferPropertiesANDROID extends Struct<VkAndroidHardwareBufferPropertiesANDROID> implements NativeResource {
    static ALIGNOF: number;
    static ALLOCATIONSIZE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYTYPEBITS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkAndroidHardwareBufferPropertiesANDROID;
    static calloc(paramarg0: MemoryStack): VkAndroidHardwareBufferPropertiesANDROID;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAndroidHardwareBufferPropertiesANDROID;
    static create(paramarg0: number): VkAndroidHardwareBufferPropertiesANDROID;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAndroidHardwareBufferPropertiesANDROID;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAndroidHardwareBufferPropertiesANDROID;
    static malloc(paramarg0: MemoryStack): VkAndroidHardwareBufferPropertiesANDROID;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nallocationSize(paramarg0: number): number;
    static nmemoryTypeBits(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    allocationSize(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAndroidHardwareBufferPropertiesANDROID;
    memoryTypeBits(): number;
    pNext(): number;
    pNext(arg0: number): VkAndroidHardwareBufferPropertiesANDROID;
    pNext(arg0: VkAndroidHardwareBufferFormatProperties2ANDROID): VkAndroidHardwareBufferPropertiesANDROID;
    pNext(arg0: VkAndroidHardwareBufferFormatPropertiesANDROID): VkAndroidHardwareBufferPropertiesANDROID;
    pNext(arg0: VkAndroidHardwareBufferFormatResolvePropertiesANDROID): VkAndroidHardwareBufferPropertiesANDROID;
    sType(): number;
    sType(arg0: number): VkAndroidHardwareBufferPropertiesANDROID;
    sType$Default(): VkAndroidHardwareBufferPropertiesANDROID;
    set(arg0: number, arg1: number): VkAndroidHardwareBufferPropertiesANDROID;
    set(arg0: VkAndroidHardwareBufferPropertiesANDROID): VkAndroidHardwareBufferPropertiesANDROID;
    sizeof(): number;
}