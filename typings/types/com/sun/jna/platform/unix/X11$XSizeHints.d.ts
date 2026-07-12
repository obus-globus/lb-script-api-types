import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { X11$XSizeHints$Aspect } from '../../../../../com/sun/jna/platform/unix/X11$XSizeHints$Aspect.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class X11$XSizeHints extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    base_height: number;
    base_width: number;
    flags: NativeLong;
    height: number;
    height_inc: number;
    max_aspect: X11$XSizeHints$Aspect;
    max_height: number;
    max_width: number;
    min_aspect: X11$XSizeHints$Aspect;
    min_height: number;
    min_width: number;
    width: number;
    width_inc: number;
    win_gravity: number;
    x: number;
    y: number;
}