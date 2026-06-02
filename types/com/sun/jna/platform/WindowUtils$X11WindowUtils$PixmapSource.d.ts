import type { X11$Display } from '../../../../com/sun/jna/platform/unix/X11$Display.d.ts'
import type { X11$Pixmap } from '../../../../com/sun/jna/platform/unix/X11$Pixmap.d.ts'
import type { X11$Window } from '../../../../com/sun/jna/platform/unix/X11$Window.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface WindowUtils$X11WindowUtils$PixmapSource extends Object{
    getPixmap(arg0: X11$Display, arg1: X11$Window): X11$Pixmap;
}