import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceHostImageCopyProperties extends Struct<VkPhysicalDeviceHostImageCopyProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COPYDSTLAYOUTCOUNT: number;
    static COPYSRCLAYOUTCOUNT: number;
    static IDENTICALMEMORYTYPEREQUIREMENTS: number;
    static OPTIMALTILINGLAYOUTUUID: number;
    static PCOPYDSTLAYOUTS: number;
    static PCOPYSRCLAYOUTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceHostImageCopyProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceHostImageCopyProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceHostImageCopyProperties;
    static create(paramarg0: number): VkPhysicalDeviceHostImageCopyProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceHostImageCopyProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceHostImageCopyProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceHostImageCopyProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncopyDstLayoutCount(paramarg0: number): number;
    static ncopyDstLayoutCount(paramarg0: number, paramarg1: number): void;
    static ncopySrcLayoutCount(paramarg0: number): number;
    static ncopySrcLayoutCount(paramarg0: number, paramarg1: number): void;
    static nidenticalMemoryTypeRequirements(paramarg0: number): number;
    static nidenticalMemoryTypeRequirements(paramarg0: number, paramarg1: number): void;
    static noptimalTilingLayoutUUID(paramarg0: number, paramarg1: number): number;
    static noptimalTilingLayoutUUID(paramarg0: number): ByteBuffer;
    static noptimalTilingLayoutUUID(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static noptimalTilingLayoutUUID(paramarg0: number, paramarg1: ByteBuffer): void;
    static npCopyDstLayouts(paramarg0: number): IntBuffer;
    static npCopyDstLayouts(paramarg0: number, paramarg1: IntBuffer): void;
    static npCopySrcLayouts(paramarg0: number): IntBuffer;
    static npCopySrcLayouts(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    copyDstLayoutCount(): number;
    copyDstLayoutCount(arg0: number): VkPhysicalDeviceHostImageCopyProperties;
    copySrcLayoutCount(): number;
    copySrcLayoutCount(arg0: number): VkPhysicalDeviceHostImageCopyProperties;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceHostImageCopyProperties;
    identicalMemoryTypeRequirements(): boolean;
    identicalMemoryTypeRequirements(arg0: boolean): VkPhysicalDeviceHostImageCopyProperties;
    optimalTilingLayoutUUID(): ByteBuffer;
    optimalTilingLayoutUUID(arg0: ByteBuffer): VkPhysicalDeviceHostImageCopyProperties;
    optimalTilingLayoutUUID(arg0: number): number;
    optimalTilingLayoutUUID(arg0: number, arg1: number): VkPhysicalDeviceHostImageCopyProperties;
    pCopyDstLayouts(): IntBuffer;
    pCopyDstLayouts(arg0: IntBuffer): VkPhysicalDeviceHostImageCopyProperties;
    pCopySrcLayouts(): IntBuffer;
    pCopySrcLayouts(arg0: IntBuffer): VkPhysicalDeviceHostImageCopyProperties;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceHostImageCopyProperties;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceHostImageCopyProperties;
    sType$Default(): VkPhysicalDeviceHostImageCopyProperties;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer, arg4: number, arg5: IntBuffer, arg6: ByteBuffer, arg7: boolean): VkPhysicalDeviceHostImageCopyProperties;
    set(arg0: VkPhysicalDeviceHostImageCopyProperties): VkPhysicalDeviceHostImageCopyProperties;
    sizeof(): number;
}