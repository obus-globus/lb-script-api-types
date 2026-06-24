import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkOpticalFlowImageFormatInfoNV extends Struct<VkOpticalFlowImageFormatInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USAGE: number;
    static calloc(): VkOpticalFlowImageFormatInfoNV;
    static calloc(paramarg0: MemoryStack): VkOpticalFlowImageFormatInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkOpticalFlowImageFormatInfoNV;
    static create(paramarg0: number): VkOpticalFlowImageFormatInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkOpticalFlowImageFormatInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkOpticalFlowImageFormatInfoNV;
    static malloc(paramarg0: MemoryStack): VkOpticalFlowImageFormatInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkOpticalFlowImageFormatInfoNV;
    pNext(): number;
    pNext(arg0: number): VkOpticalFlowImageFormatInfoNV;
    sType(): number;
    sType(arg0: number): VkOpticalFlowImageFormatInfoNV;
    sType$Default(): VkOpticalFlowImageFormatInfoNV;
    set(arg0: number, arg1: number, arg2: number): VkOpticalFlowImageFormatInfoNV;
    set(arg0: VkOpticalFlowImageFormatInfoNV): VkOpticalFlowImageFormatInfoNV;
    sizeof(): number;
    usage(): number;
    usage(arg0: number): VkOpticalFlowImageFormatInfoNV;
}