import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { X11$Visual } from '../../../../../com/sun/jna/platform/unix/X11$Visual.d.ts'
import type { X11$VisualID } from '../../../../../com/sun/jna/platform/unix/X11$VisualID.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class X11$XVisualInfo extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    bits_per_rgb: number;
    blue_mask: NativeLong;
    c_class: number;
    colormap_size: number;
    depth: number;
    green_mask: NativeLong;
    red_mask: NativeLong;
    screen: number;
    visual: X11$Visual;
    visualid: X11$VisualID;
}