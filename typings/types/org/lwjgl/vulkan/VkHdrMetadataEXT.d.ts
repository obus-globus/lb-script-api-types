import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkHdrVividDynamicMetadataHUAWEI } from '../../../org/lwjgl/vulkan/VkHdrVividDynamicMetadataHUAWEI.d.ts'
import type { VkXYColorEXT } from '../../../org/lwjgl/vulkan/VkXYColorEXT.d.ts'
export class VkHdrMetadataEXT extends Struct<VkHdrMetadataEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAYPRIMARYBLUE: number;
    static DISPLAYPRIMARYGREEN: number;
    static DISPLAYPRIMARYRED: number;
    static MAXCONTENTLIGHTLEVEL: number;
    static MAXFRAMEAVERAGELIGHTLEVEL: number;
    static MAXLUMINANCE: number;
    static MINLUMINANCE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static WHITEPOINT: number;
    static calloc(): VkHdrMetadataEXT;
    static calloc(paramarg0: MemoryStack): VkHdrMetadataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkHdrMetadataEXT;
    static create(paramarg0: number): VkHdrMetadataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkHdrMetadataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkHdrMetadataEXT;
    static malloc(paramarg0: MemoryStack): VkHdrMetadataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisplayPrimaryBlue(paramarg0: number): VkXYColorEXT;
    static ndisplayPrimaryBlue(paramarg0: number, paramarg1: VkXYColorEXT): void;
    static ndisplayPrimaryGreen(paramarg0: number): VkXYColorEXT;
    static ndisplayPrimaryGreen(paramarg0: number, paramarg1: VkXYColorEXT): void;
    static ndisplayPrimaryRed(paramarg0: number): VkXYColorEXT;
    static ndisplayPrimaryRed(paramarg0: number, paramarg1: VkXYColorEXT): void;
    static nmaxContentLightLevel(paramarg0: number): number;
    static nmaxContentLightLevel(paramarg0: number, paramarg1: number): void;
    static nmaxFrameAverageLightLevel(paramarg0: number): number;
    static nmaxFrameAverageLightLevel(paramarg0: number, paramarg1: number): void;
    static nmaxLuminance(paramarg0: number): number;
    static nmaxLuminance(paramarg0: number, paramarg1: number): void;
    static nminLuminance(paramarg0: number): number;
    static nminLuminance(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nwhitePoint(paramarg0: number): VkXYColorEXT;
    static nwhitePoint(paramarg0: number, paramarg1: VkXYColorEXT): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkHdrMetadataEXT;
    displayPrimaryBlue(): VkXYColorEXT;
    displayPrimaryBlue(arg0: (param0: VkXYColorEXT) => void): VkHdrMetadataEXT;
    displayPrimaryBlue(arg0: VkXYColorEXT): VkHdrMetadataEXT;
    displayPrimaryGreen(): VkXYColorEXT;
    displayPrimaryGreen(arg0: (param0: VkXYColorEXT) => void): VkHdrMetadataEXT;
    displayPrimaryGreen(arg0: VkXYColorEXT): VkHdrMetadataEXT;
    displayPrimaryRed(): VkXYColorEXT;
    displayPrimaryRed(arg0: (param0: VkXYColorEXT) => void): VkHdrMetadataEXT;
    displayPrimaryRed(arg0: VkXYColorEXT): VkHdrMetadataEXT;
    maxContentLightLevel(): number;
    maxContentLightLevel(arg0: number): VkHdrMetadataEXT;
    maxFrameAverageLightLevel(): number;
    maxFrameAverageLightLevel(arg0: number): VkHdrMetadataEXT;
    maxLuminance(): number;
    maxLuminance(arg0: number): VkHdrMetadataEXT;
    minLuminance(): number;
    minLuminance(arg0: number): VkHdrMetadataEXT;
    pNext(): number;
    pNext(arg0: number): VkHdrMetadataEXT;
    pNext(arg0: VkHdrVividDynamicMetadataHUAWEI): VkHdrMetadataEXT;
    sType(): number;
    sType(arg0: number): VkHdrMetadataEXT;
    sType$Default(): VkHdrMetadataEXT;
    set(arg0: number, arg1: number, arg2: VkXYColorEXT, arg3: VkXYColorEXT, arg4: VkXYColorEXT, arg5: VkXYColorEXT, arg6: number, arg7: number, arg8: number, arg9: number): VkHdrMetadataEXT;
    set(arg0: VkHdrMetadataEXT): VkHdrMetadataEXT;
    sizeof(): number;
    whitePoint(): VkXYColorEXT;
    whitePoint(arg0: (param0: VkXYColorEXT) => void): VkHdrMetadataEXT;
    whitePoint(arg0: VkXYColorEXT): VkHdrMetadataEXT;
}