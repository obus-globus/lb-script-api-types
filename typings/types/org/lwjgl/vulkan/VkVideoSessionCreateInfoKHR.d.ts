import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtensionProperties } from '../../../org/lwjgl/vulkan/VkExtensionProperties.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkVideoEncodeAV1SessionCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1SessionCreateInfoKHR.d.ts'
import type { VkVideoEncodeH264SessionCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264SessionCreateInfoKHR.d.ts'
import type { VkVideoEncodeH265SessionCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265SessionCreateInfoKHR.d.ts'
import type { VkVideoEncodeSessionIntraRefreshCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeSessionIntraRefreshCreateInfoKHR.d.ts'
import type { VkVideoEncodeSessionRgbConversionCreateInfoVALVE } from '../../../org/lwjgl/vulkan/VkVideoEncodeSessionRgbConversionCreateInfoVALVE.d.ts'
import type { VkVideoProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoProfileInfoKHR.d.ts'
export class VkVideoSessionCreateInfoKHR extends Struct<VkVideoSessionCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MAXACTIVEREFERENCEPICTURES: number;
    static MAXCODEDEXTENT: number;
    static MAXDPBSLOTS: number;
    static PICTUREFORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDHEADERVERSION: number;
    static PVIDEOPROFILE: number;
    static QUEUEFAMILYINDEX: number;
    static REFERENCEPICTUREFORMAT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoSessionCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoSessionCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoSessionCreateInfoKHR;
    static create(paramarg0: number): VkVideoSessionCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoSessionCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoSessionCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoSessionCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmaxActiveReferencePictures(paramarg0: number): number;
    static nmaxActiveReferencePictures(paramarg0: number, paramarg1: number): void;
    static nmaxCodedExtent(paramarg0: number): VkExtent2D;
    static nmaxCodedExtent(paramarg0: number, paramarg1: VkExtent2D): void;
    static nmaxDpbSlots(paramarg0: number): number;
    static nmaxDpbSlots(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdHeaderVersion(paramarg0: number): VkExtensionProperties;
    static npStdHeaderVersion(paramarg0: number, paramarg1: VkExtensionProperties): void;
    static npVideoProfile(paramarg0: number): VkVideoProfileInfoKHR;
    static npVideoProfile(paramarg0: number, paramarg1: VkVideoProfileInfoKHR): void;
    static npictureFormat(paramarg0: number): number;
    static npictureFormat(paramarg0: number, paramarg1: number): void;
    static nqueueFamilyIndex(paramarg0: number): number;
    static nqueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static nreferencePictureFormat(paramarg0: number): number;
    static nreferencePictureFormat(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoSessionCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkVideoSessionCreateInfoKHR;
    maxActiveReferencePictures(): number;
    maxActiveReferencePictures(arg0: number): VkVideoSessionCreateInfoKHR;
    maxCodedExtent(): VkExtent2D;
    maxCodedExtent(arg0: (param0: VkExtent2D) => void): VkVideoSessionCreateInfoKHR;
    maxCodedExtent(arg0: VkExtent2D): VkVideoSessionCreateInfoKHR;
    maxDpbSlots(): number;
    maxDpbSlots(arg0: number): VkVideoSessionCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoSessionCreateInfoKHR;
    pNext(arg0: VkVideoEncodeAV1SessionCreateInfoKHR): VkVideoSessionCreateInfoKHR;
    pNext(arg0: VkVideoEncodeH264SessionCreateInfoKHR): VkVideoSessionCreateInfoKHR;
    pNext(arg0: VkVideoEncodeH265SessionCreateInfoKHR): VkVideoSessionCreateInfoKHR;
    pNext(arg0: VkVideoEncodeSessionIntraRefreshCreateInfoKHR): VkVideoSessionCreateInfoKHR;
    pNext(arg0: VkVideoEncodeSessionRgbConversionCreateInfoVALVE): VkVideoSessionCreateInfoKHR;
    pStdHeaderVersion(): VkExtensionProperties;
    pStdHeaderVersion(arg0: VkExtensionProperties): VkVideoSessionCreateInfoKHR;
    pVideoProfile(): VkVideoProfileInfoKHR;
    pVideoProfile(arg0: VkVideoProfileInfoKHR): VkVideoSessionCreateInfoKHR;
    pictureFormat(): number;
    pictureFormat(arg0: number): VkVideoSessionCreateInfoKHR;
    queueFamilyIndex(): number;
    queueFamilyIndex(arg0: number): VkVideoSessionCreateInfoKHR;
    referencePictureFormat(): number;
    referencePictureFormat(arg0: number): VkVideoSessionCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoSessionCreateInfoKHR;
    sType$Default(): VkVideoSessionCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: VkVideoProfileInfoKHR, arg5: number, arg6: VkExtent2D, arg7: number, arg8: number, arg9: number, arg10: VkExtensionProperties): VkVideoSessionCreateInfoKHR;
    set(arg0: VkVideoSessionCreateInfoKHR): VkVideoSessionCreateInfoKHR;
    sizeof(): number;
}