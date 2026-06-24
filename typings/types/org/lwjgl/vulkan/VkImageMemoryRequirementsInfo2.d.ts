import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImagePlaneMemoryRequirementsInfo } from '../../../org/lwjgl/vulkan/VkImagePlaneMemoryRequirementsInfo.d.ts'
import type { VkImagePlaneMemoryRequirementsInfoKHR } from '../../../org/lwjgl/vulkan/VkImagePlaneMemoryRequirementsInfoKHR.d.ts'
export class VkImageMemoryRequirementsInfo2 extends Struct<VkImageMemoryRequirementsInfo2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageMemoryRequirementsInfo2;
    static calloc(paramarg0: MemoryStack): VkImageMemoryRequirementsInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageMemoryRequirementsInfo2;
    static create(paramarg0: number): VkImageMemoryRequirementsInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageMemoryRequirementsInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageMemoryRequirementsInfo2;
    static malloc(paramarg0: MemoryStack): VkImageMemoryRequirementsInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageMemoryRequirementsInfo2;
    image(): number;
    image(arg0: number): VkImageMemoryRequirementsInfo2;
    pNext(): number;
    pNext(arg0: number): VkImageMemoryRequirementsInfo2;
    pNext(arg0: VkImagePlaneMemoryRequirementsInfo): VkImageMemoryRequirementsInfo2;
    pNext(arg0: VkImagePlaneMemoryRequirementsInfoKHR): VkImageMemoryRequirementsInfo2;
    sType(): number;
    sType(arg0: number): VkImageMemoryRequirementsInfo2;
    sType$Default(): VkImageMemoryRequirementsInfo2;
    set(arg0: number, arg1: number, arg2: number): VkImageMemoryRequirementsInfo2;
    set(arg0: VkImageMemoryRequirementsInfo2): VkImageMemoryRequirementsInfo2;
    sizeof(): number;
}