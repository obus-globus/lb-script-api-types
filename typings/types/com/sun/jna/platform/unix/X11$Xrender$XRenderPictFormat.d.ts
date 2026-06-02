import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { X11$Colormap } from '../../../../../com/sun/jna/platform/unix/X11$Colormap.d.ts'
import type { X11$Xrender$PictFormat } from '../../../../../com/sun/jna/platform/unix/X11$Xrender$PictFormat.d.ts'
import type { X11$Xrender$XRenderDirectFormat } from '../../../../../com/sun/jna/platform/unix/X11$Xrender$XRenderDirectFormat.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class X11$Xrender$XRenderPictFormat extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    constructor()
    colormap: X11$Colormap;
    depth: number;
    direct: X11$Xrender$XRenderDirectFormat;
    id: X11$Xrender$PictFormat;
    type: number;
}