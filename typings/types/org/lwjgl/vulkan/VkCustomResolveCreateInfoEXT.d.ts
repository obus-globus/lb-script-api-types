import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCustomResolveCreateInfoEXT extends Struct<VkCustomResolveCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static CUSTOMRESOLVE: number;
    static DEPTHATTACHMENTFORMAT: number;
    static PCOLORATTACHMENTFORMATS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STENCILATTACHMENTFORMAT: number;
    static STYPE: number;
    static calloc(): VkCustomResolveCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkCustomResolveCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCustomResolveCreateInfoEXT;
    static create(paramarg0: number): VkCustomResolveCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCustomResolveCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCustomResolveCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkCustomResolveCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static ncustomResolve(paramarg0: number): number;
    static ncustomResolve(paramarg0: number, paramarg1: number): void;
    static ndepthAttachmentFormat(paramarg0: number): number;
    static ndepthAttachmentFormat(paramarg0: number, paramarg1: number): void;
    static npColorAttachmentFormats(paramarg0: number): IntBuffer;
    static npColorAttachmentFormats(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilAttachmentFormat(paramarg0: number): number;
    static nstencilAttachmentFormat(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkCustomResolveCreateInfoEXT;
    create(arg0: number, arg1: ByteBuffer): VkCustomResolveCreateInfoEXT;
    customResolve(): boolean;
    customResolve(arg0: boolean): VkCustomResolveCreateInfoEXT;
    depthAttachmentFormat(): number;
    depthAttachmentFormat(arg0: number): VkCustomResolveCreateInfoEXT;
    pColorAttachmentFormats(): IntBuffer;
    pColorAttachmentFormats(arg0: IntBuffer): VkCustomResolveCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkCustomResolveCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkCustomResolveCreateInfoEXT;
    sType$Default(): VkCustomResolveCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: IntBuffer, arg5: number, arg6: number): VkCustomResolveCreateInfoEXT;
    set(arg0: VkCustomResolveCreateInfoEXT): VkCustomResolveCreateInfoEXT;
    sizeof(): number;
    stencilAttachmentFormat(): number;
    stencilAttachmentFormat(arg0: number): VkCustomResolveCreateInfoEXT;
}