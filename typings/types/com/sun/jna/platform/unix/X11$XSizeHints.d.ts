import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { X11$XSizeHints$Aspect } from '../../../../../com/sun/jna/platform/unix/X11$XSizeHints$Aspect.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class X11$XSizeHints extends Structure {
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