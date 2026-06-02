import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { X11$Cursor } from '../../../../../com/sun/jna/platform/unix/X11$Cursor.d.ts'
import type { X11$Display } from '../../../../../com/sun/jna/platform/unix/X11$Display.d.ts'
import type { X11$Visual } from '../../../../../com/sun/jna/platform/unix/X11$Visual.d.ts'
import type { X11$VisualID } from '../../../../../com/sun/jna/platform/unix/X11$VisualID.d.ts'
import type { X11$Window } from '../../../../../com/sun/jna/platform/unix/X11$Window.d.ts'
import type { X11$XDeviceByReference } from '../../../../../com/sun/jna/platform/unix/X11$XDeviceByReference.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface X11$XTest extends Library, Object{
    XTestCompareCurrentCursorWithWindow(arg0: X11$Display, arg1: X11$Window): boolean;
    XTestCompareCursorWithWindow(arg0: X11$Display, arg1: X11$Window, arg2: X11$Cursor): boolean;
    XTestDiscard(arg0: X11$Display): number;
    XTestFakeButtonEvent(arg0: X11$Display, arg1: number, arg2: boolean, arg3: NativeLong): number;
    XTestFakeDeviceButtonEvent(arg0: X11$Display, arg1: X11$XDeviceByReference, arg2: number, arg3: boolean, arg4: IntByReference, arg5: number, arg6: NativeLong): number;
    XTestFakeDeviceKeyEvent(arg0: X11$Display, arg1: X11$XDeviceByReference, arg2: number, arg3: boolean, arg4: IntByReference, arg5: number, arg6: NativeLong): number;
    XTestFakeDeviceMotionEvent(arg0: X11$Display, arg1: X11$XDeviceByReference, arg2: boolean, arg3: number, arg4: IntByReference, arg5: number, arg6: NativeLong): number;
    XTestFakeKeyEvent(arg0: X11$Display, arg1: number, arg2: boolean, arg3: NativeLong): number;
    XTestFakeMotionEvent(arg0: X11$Display, arg1: number, arg2: number, arg3: number, arg4: NativeLong): number;
    XTestFakeProximityEvent(arg0: X11$Display, arg1: X11$XDeviceByReference, arg2: boolean, arg3: IntByReference, arg4: number, arg5: NativeLong): number;
    XTestFakeRelativeMotionEvent(arg0: X11$Display, arg1: number, arg2: number, arg3: NativeLong): number;
    XTestGrabControl(arg0: X11$Display, arg1: boolean): number;
    XTestQueryExtension(arg0: X11$Display, arg1: IntByReference, arg2: IntByReference, arg3: IntByReference, arg4: IntByReference): boolean;
    XTestSetVisualIDOfVisual(arg0: X11$Visual, arg1: X11$VisualID): void;
}