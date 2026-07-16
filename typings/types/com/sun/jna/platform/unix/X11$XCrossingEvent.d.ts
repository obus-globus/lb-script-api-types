import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { X11$Display } from '../../../../../com/sun/jna/platform/unix/X11$Display.d.ts'
import type { X11$Window } from '../../../../../com/sun/jna/platform/unix/X11$Window.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class X11$XCrossingEvent extends Structure {
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
    detail: number;
    display: X11$Display;
    focus: number;
    mode: number;
    root: X11$Window;
    same_screen: number;
    send_event: number;
    serial: NativeLong;
    state: number;
    subwindow: X11$Window;
    time: NativeLong;
    type: number;
    window: X11$Window;
    x: number;
    x_root: number;
    y: number;
    y_root: number;
}