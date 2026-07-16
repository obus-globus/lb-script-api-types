import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { X11$Pixmap } from '../../../../../com/sun/jna/platform/unix/X11$Pixmap.d.ts'
import type { X11$Window } from '../../../../../com/sun/jna/platform/unix/X11$Window.d.ts'
import type { X11$XID } from '../../../../../com/sun/jna/platform/unix/X11$XID.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class X11$XWMHints extends Structure {
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
    flags: NativeLong;
    icon_mask: X11$Pixmap;
    icon_pixmap: X11$Pixmap;
    icon_window: X11$Window;
    icon_x: number;
    icon_y: number;
    initial_state: number;
    input: boolean;
    window_group: X11$XID;
}