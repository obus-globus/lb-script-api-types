import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { X11$Display } from '../../../../../com/sun/jna/platform/unix/X11$Display.d.ts'
import type { X11$XEvent } from '../../../../../com/sun/jna/platform/unix/X11$XEvent.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface X11$Xevie extends Library, Object{
    XevieEnd(arg0: X11$Display): number;
    XevieQueryVersion(arg0: X11$Display, arg1: IntByReference, arg2: IntByReference): boolean;
    XevieSelectInput(arg0: X11$Display, arg1: NativeLong): number;
    XevieSendEvent(arg0: X11$Display, arg1: X11$XEvent, arg2: number): number;
    XevieStart(arg0: X11$Display): number;
}