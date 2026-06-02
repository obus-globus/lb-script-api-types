import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { X11$Display } from '../../../../../com/sun/jna/platform/unix/X11$Display.d.ts'
import type { X11$Pixmap } from '../../../../../com/sun/jna/platform/unix/X11$Pixmap.d.ts'
import type { X11$Window } from '../../../../../com/sun/jna/platform/unix/X11$Window.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface X11$Xext extends Library, Object{
    XShapeCombineMask(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: number, arg4: number, arg5: X11$Pixmap, arg6: number): void;
}