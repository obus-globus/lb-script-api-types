import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkExportMetalTextureInfoEXT extends Struct<VkExportMetalTextureInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERVIEW: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGE: number;
    static IMAGEVIEW: number;
    static MTLTEXTURE: number;
    static PLANE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExportMetalTextureInfoEXT;
    static calloc(paramarg0: MemoryStack): VkExportMetalTextureInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExportMetalTextureInfoEXT;
    static create(paramarg0: number): VkExportMetalTextureInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportMetalTextureInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExportMetalTextureInfoEXT;
    static malloc(paramarg0: MemoryStack): VkExportMetalTextureInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferView(paramarg0: number): number;
    static nbufferView(paramarg0: number, paramarg1: number): void;
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static nimageView(paramarg0: number): number;
    static nimageView(paramarg0: number, paramarg1: number): void;
    static nmtlTexture(paramarg0: number): number;
    static nmtlTexture(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nplane(paramarg0: number): number;
    static nplane(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferView(): number;
    bufferView(arg0: number): VkExportMetalTextureInfoEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExportMetalTextureInfoEXT;
    image(): number;
    image(arg0: number): VkExportMetalTextureInfoEXT;
    imageView(): number;
    imageView(arg0: number): VkExportMetalTextureInfoEXT;
    mtlTexture(): number;
    mtlTexture(arg0: number): VkExportMetalTextureInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkExportMetalTextureInfoEXT;
    plane(): number;
    plane(arg0: number): VkExportMetalTextureInfoEXT;
    sType(): number;
    sType(arg0: number): VkExportMetalTextureInfoEXT;
    sType$Default(): VkExportMetalTextureInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkExportMetalTextureInfoEXT;
    set(arg0: VkExportMetalTextureInfoEXT): VkExportMetalTextureInfoEXT;
    sizeof(): number;
}