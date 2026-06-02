import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { X11$Colormap } from '../../../../../com/sun/jna/platform/unix/X11$Colormap.d.ts'
import type { X11$Cursor } from '../../../../../com/sun/jna/platform/unix/X11$Cursor.d.ts'
import type { X11$Pixmap } from '../../../../../com/sun/jna/platform/unix/X11$Pixmap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class X11$XSetWindowAttributes extends Structure {
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
    background_pixel: NativeLong;
    background_pixmap: X11$Pixmap;
    backing_pixel: NativeLong;
    backing_planes: NativeLong;
    backing_store: number;
    bit_gravity: number;
    border_pixel: NativeLong;
    border_pixmap: X11$Pixmap;
    colormap: X11$Colormap;
    cursor: X11$Cursor;
    do_not_propagate_mask: NativeLong;
    event_mask: NativeLong;
    override_redirect: boolean;
    save_under: boolean;
    win_gravity: number;
}