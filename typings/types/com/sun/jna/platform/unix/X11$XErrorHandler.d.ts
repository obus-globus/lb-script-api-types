import type { Callback } from '../../../../../com/sun/jna/Callback.d.ts'
import type { X11$Display } from '../../../../../com/sun/jna/platform/unix/X11$Display.d.ts'
import type { X11$XErrorEvent } from '../../../../../com/sun/jna/platform/unix/X11$XErrorEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface X11$XErrorHandler extends Callback, Object{
    apply(arg0: X11$Display, arg1: X11$XErrorEvent): number;
}