import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { Visual } from '../../../../org/lwjgl/system/linux/Visual.d.ts'
export class XVisualInfo extends Struct<XVisualInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BITS_PER_RGB: number;
    static BLUE_MASK: number;
    static CLASS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORMAP_SIZE: number;
    static DEPTH: number;
    static GREEN_MASK: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RED_MASK: number;
    static SCREEN: number;
    static SIZEOF: number;
    static VISUAL: number;
    static VISUALID: number;
    static calloc(): XVisualInfo;
    static calloc(paramarg0: MemoryStack): XVisualInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XVisualInfo;
    static create(paramarg0: number): XVisualInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XVisualInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XVisualInfo;
    static malloc(paramarg0: MemoryStack): XVisualInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbits_per_rgb(paramarg0: number): number;
    static nbits_per_rgb(paramarg0: number, paramarg1: number): void;
    static nblue_mask(paramarg0: number): number;
    static nblue_mask(paramarg0: number, paramarg1: number): void;
    static nclass$(paramarg0: number): number;
    static nclass$(paramarg0: number, paramarg1: number): void;
    static ncolormap_size(paramarg0: number): number;
    static ncolormap_size(paramarg0: number, paramarg1: number): void;
    static ndepth(paramarg0: number): number;
    static ndepth(paramarg0: number, paramarg1: number): void;
    static ngreen_mask(paramarg0: number): number;
    static ngreen_mask(paramarg0: number, paramarg1: number): void;
    static nred_mask(paramarg0: number): number;
    static nred_mask(paramarg0: number, paramarg1: number): void;
    static nscreen(paramarg0: number): number;
    static nscreen(paramarg0: number, paramarg1: number): void;
    static nvisual(paramarg0: number): Visual;
    static nvisual(paramarg0: number, paramarg1: Visual): void;
    static nvisualid(paramarg0: number): number;
    static nvisualid(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bits_per_rgb(): number;
    bits_per_rgb(arg0: number): XVisualInfo;
    blue_mask(): number;
    blue_mask(arg0: number): XVisualInfo;
    class$(): number;
    class$(arg0: number): XVisualInfo;
    close(): void;
    colormap_size(): number;
    colormap_size(arg0: number): XVisualInfo;
    create(arg0: number, arg1: ByteBuffer): XVisualInfo;
    depth(): number;
    depth(arg0: number): XVisualInfo;
    green_mask(): number;
    green_mask(arg0: number): XVisualInfo;
    red_mask(): number;
    red_mask(arg0: number): XVisualInfo;
    screen(): number;
    screen(arg0: number): XVisualInfo;
    set(arg0: Visual, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): XVisualInfo;
    set(arg0: XVisualInfo): XVisualInfo;
    sizeof(): number;
    visual(): Visual;
    visual(arg0: Visual): XVisualInfo;
    visualid(): number;
    visualid(arg0: number): XVisualInfo;
}