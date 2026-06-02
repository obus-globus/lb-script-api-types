import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { X11$Atom } from '../../../../../com/sun/jna/platform/unix/X11$Atom.d.ts'
import type { X11$AtomByReference } from '../../../../../com/sun/jna/platform/unix/X11$AtomByReference.d.ts'
import type { X11$Colormap } from '../../../../../com/sun/jna/platform/unix/X11$Colormap.d.ts'
import type { X11$Display } from '../../../../../com/sun/jna/platform/unix/X11$Display.d.ts'
import type { X11$Drawable } from '../../../../../com/sun/jna/platform/unix/X11$Drawable.d.ts'
import type { X11$GC } from '../../../../../com/sun/jna/platform/unix/X11$GC.d.ts'
import type { X11$KeySym } from '../../../../../com/sun/jna/platform/unix/X11$KeySym.d.ts'
import type { X11$Pixmap } from '../../../../../com/sun/jna/platform/unix/X11$Pixmap.d.ts'
import type { X11$Screen } from '../../../../../com/sun/jna/platform/unix/X11$Screen.d.ts'
import type { X11$Visual } from '../../../../../com/sun/jna/platform/unix/X11$Visual.d.ts'
import type { X11$Window } from '../../../../../com/sun/jna/platform/unix/X11$Window.d.ts'
import type { X11$WindowByReference } from '../../../../../com/sun/jna/platform/unix/X11$WindowByReference.d.ts'
import type { X11$XErrorHandler } from '../../../../../com/sun/jna/platform/unix/X11$XErrorHandler.d.ts'
import type { X11$XEvent } from '../../../../../com/sun/jna/platform/unix/X11$XEvent.d.ts'
import type { X11$XGCValues } from '../../../../../com/sun/jna/platform/unix/X11$XGCValues.d.ts'
import type { X11$XGenericEventCookie } from '../../../../../com/sun/jna/platform/unix/X11$XGenericEventCookie.d.ts'
import type { X11$XImage } from '../../../../../com/sun/jna/platform/unix/X11$XImage.d.ts'
import type { X11$XKeyboardControlRef } from '../../../../../com/sun/jna/platform/unix/X11$XKeyboardControlRef.d.ts'
import type { X11$XKeyboardStateRef } from '../../../../../com/sun/jna/platform/unix/X11$XKeyboardStateRef.d.ts'
import type { X11$XModifierKeymapRef } from '../../../../../com/sun/jna/platform/unix/X11$XModifierKeymapRef.d.ts'
import type { X11$XPoint } from '../../../../../com/sun/jna/platform/unix/X11$XPoint.d.ts'
import type { X11$XRectangle } from '../../../../../com/sun/jna/platform/unix/X11$XRectangle.d.ts'
import type { X11$XSetWindowAttributes } from '../../../../../com/sun/jna/platform/unix/X11$XSetWindowAttributes.d.ts'
import type { X11$XSizeHints } from '../../../../../com/sun/jna/platform/unix/X11$XSizeHints.d.ts'
import type { X11$XTextProperty } from '../../../../../com/sun/jna/platform/unix/X11$XTextProperty.d.ts'
import type { X11$XVisualInfo } from '../../../../../com/sun/jna/platform/unix/X11$XVisualInfo.d.ts'
import type { X11$XWMHints } from '../../../../../com/sun/jna/platform/unix/X11$XWMHints.d.ts'
import type { X11$XWindowAttributes } from '../../../../../com/sun/jna/platform/unix/X11$XWindowAttributes.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { NativeLongByReference } from '../../../../../com/sun/jna/ptr/NativeLongByReference.d.ts'
import type { PointerByReference } from '../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface X11 extends Library, Object{
    DefaultScreenOfDisplay(arg0: X11$Display): X11$Screen;
    XAllocNamedColor(arg0: X11$Display, arg1: number, arg2: string, arg3: Pointer, arg4: Pointer): number;
    XAllocSizeHints(): X11$XSizeHints;
    XAutoRepeatOff(arg0: X11$Display): number;
    XAutoRepeatOn(arg0: X11$Display): number;
    XBell(arg0: X11$Display, arg1: number): number;
    XChangeKeyboardControl(arg0: X11$Display, arg1: NativeLong, arg2: X11$XKeyboardControlRef): number;
    XChangeKeyboardMapping(arg0: X11$Display, arg1: number, arg2: number, arg3: X11$KeySym[], arg4: number): number;
    XChangeProperty(arg0: X11$Display, arg1: X11$Window, arg2: X11$Atom, arg3: X11$Atom, arg4: number, arg5: number, arg6: Pointer, arg7: number): number;
    XChangeWindowAttributes(arg0: X11$Display, arg1: X11$Window, arg2: NativeLong, arg3: X11$XSetWindowAttributes): number;
    XCheckMaskEvent(arg0: X11$Display, arg1: NativeLong, arg2: X11$XEvent): boolean;
    XCheckTypedEvent(arg0: X11$Display, arg1: number, arg2: X11$XEvent): boolean;
    XCheckTypedWindowEvent(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: X11$XEvent): boolean;
    XCheckWindowEvent(arg0: X11$Display, arg1: X11$Window, arg2: NativeLong, arg3: X11$XEvent): boolean;
    XClearArea(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
    XClearWindow(arg0: X11$Display, arg1: X11$Window): number;
    XCloseDisplay(arg0: X11$Display): number;
    XCopyArea(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$Drawable, arg3: X11$GC, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): number;
    XCreateBitmapFromData(arg0: X11$Display, arg1: X11$Window, arg2: Pointer, arg3: number, arg4: number): X11$Pixmap;
    XCreateColormap(arg0: X11$Display, arg1: X11$Window, arg2: X11$Visual, arg3: number): X11$Colormap;
    XCreateGC(arg0: X11$Display, arg1: X11$Drawable, arg2: NativeLong, arg3: X11$XGCValues): X11$GC;
    XCreateImage(arg0: X11$Display, arg1: X11$Visual, arg2: number, arg3: number, arg4: number, arg5: Pointer, arg6: number, arg7: number, arg8: number, arg9: number): X11$XImage;
    XCreatePixmap(arg0: X11$Display, arg1: X11$Drawable, arg2: number, arg3: number, arg4: number): X11$Pixmap;
    XCreateSimpleWindow(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): X11$Window;
    XDefaultColormap(arg0: X11$Display, arg1: number): X11$Colormap;
    XDefaultRootWindow(arg0: X11$Display): X11$Window;
    XDefaultScreen(arg0: X11$Display): number;
    XDefaultVisual(arg0: X11$Display, arg1: number): X11$Visual;
    XDeleteModifiermapEntry(arg0: X11$XModifierKeymapRef, arg1: number, arg2: number): X11$XModifierKeymapRef;
    XDeleteProperty(arg0: X11$Display, arg1: X11$Window, arg2: X11$Atom): number;
    XDestroyImage(arg0: X11$XImage): number;
    XDestroyWindow(arg0: X11$Display, arg1: X11$Window): number;
    XDisplayHeight(arg0: X11$Display, arg1: number): number;
    XDisplayKeycodes(arg0: X11$Display, arg1: IntByReference, arg2: IntByReference): number;
    XDisplayWidth(arg0: X11$Display, arg1: number): number;
    XDrawPoint(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$GC, arg3: number, arg4: number): number;
    XDrawPoints(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$GC, arg3: X11$XPoint[], arg4: number, arg5: number): number;
    XEventsQueued(arg0: X11$Display, arg1: number): number;
    XFetchName(arg0: X11$Display, arg1: X11$Window, arg2: PointerByReference): number;
    XFillArc(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$GC, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): number;
    XFillPolygon(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$GC, arg3: X11$XPoint[], arg4: number, arg5: number, arg6: number): number;
    XFillRectangle(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$GC, arg3: number, arg4: number, arg5: number, arg6: number): number;
    XFillRectangles(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$GC, arg3: X11$XRectangle[], arg4: number): number;
    XFlush(arg0: X11$Display): number;
    XFree(arg0: Pointer): number;
    XFreeEventData(arg0: X11$Display, arg1: X11$XGenericEventCookie): void;
    XFreeGC(arg0: X11$Display, arg1: X11$GC): number;
    XFreeModifiermap(arg0: X11$XModifierKeymapRef): number;
    XFreePixmap(arg0: X11$Display, arg1: X11$Pixmap): number;
    XGetAtomName(arg0: X11$Display, arg1: X11$Atom): string;
    XGetErrorText(arg0: X11$Display, arg1: number, arg2: number[], arg3: number): number;
    XGetEventData(arg0: X11$Display, arg1: X11$XGenericEventCookie): boolean;
    XGetGeometry(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$WindowByReference, arg3: IntByReference, arg4: IntByReference, arg5: IntByReference, arg6: IntByReference, arg7: IntByReference, arg8: IntByReference): number;
    XGetKeyboardControl(arg0: X11$Display, arg1: X11$XKeyboardStateRef): number;
    XGetKeyboardMapping(arg0: X11$Display, arg1: number, arg2: number, arg3: IntByReference): X11$KeySym;
    XGetModifierMapping(arg0: X11$Display): X11$XModifierKeymapRef;
    XGetVisualInfo(arg0: X11$Display, arg1: NativeLong, arg2: X11$XVisualInfo, arg3: IntByReference): X11$XVisualInfo;
    XGetWMHints(arg0: X11$Display, arg1: X11$Window): X11$XWMHints;
    XGetWMName(arg0: X11$Display, arg1: X11$Window, arg2: X11$XTextProperty): number;
    XGetWMProtocols(arg0: X11$Display, arg1: X11$Window, arg2: PointerByReference, arg3: IntByReference): number;
    XGetWindowAttributes(arg0: X11$Display, arg1: X11$Window, arg2: X11$XWindowAttributes): number;
    XGetWindowProperty(arg0: X11$Display, arg1: X11$Window, arg2: X11$Atom, arg3: NativeLong, arg4: NativeLong, arg5: boolean, arg6: X11$Atom, arg7: X11$AtomByReference, arg8: IntByReference, arg9: NativeLongByReference, arg10: NativeLongByReference, arg11: PointerByReference): number;
    XGrabKey(arg0: X11$Display, arg1: number, arg2: number, arg3: X11$Window, arg4: number, arg5: number, arg6: number): number;
    XGrabKeyboard(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: number, arg4: number, arg5: NativeLong): number;
    XInsertModifiermapEntry(arg0: X11$XModifierKeymapRef, arg1: number, arg2: number): X11$XModifierKeymapRef;
    XInternAtom(arg0: X11$Display, arg1: string, arg2: boolean): X11$Atom;
    XKeycodeToKeysym(arg0: X11$Display, arg1: number, arg2: number): X11$KeySym;
    XKeysymToKeycode(arg0: X11$Display, arg1: X11$KeySym): number;
    XKeysymToString(arg0: X11$KeySym): string;
    XLowerWindow(arg0: X11$Display, arg1: X11$Window): number;
    XMapRaised(arg0: X11$Display, arg1: X11$Window): number;
    XMapSubwindows(arg0: X11$Display, arg1: X11$Window): number;
    XMapWindow(arg0: X11$Display, arg1: X11$Window): number;
    XMaskEvent(arg0: X11$Display, arg1: NativeLong, arg2: X11$XEvent): number;
    XMoveResizeWindow(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: number, arg4: number, arg5: number): number;
    XMoveWindow(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: number): number;
    XNewModifiermap(arg0: number): X11$XModifierKeymapRef;
    XNextEvent(arg0: X11$Display, arg1: X11$XEvent): number;
    XOpenDisplay(arg0: string): X11$Display;
    XPeekEvent(arg0: X11$Display, arg1: X11$XEvent): number;
    XPending(arg0: X11$Display): number;
    XPutImage(arg0: X11$Display, arg1: X11$Drawable, arg2: X11$GC, arg3: X11$XImage, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): number;
    XQueryExtension(arg0: X11$Display, arg1: string, arg2: IntByReference, arg3: IntByReference, arg4: IntByReference): boolean;
    XQueryKeymap(arg0: X11$Display, arg1: number[]): number;
    XQueryPointer(arg0: X11$Display, arg1: X11$Window, arg2: X11$WindowByReference, arg3: X11$WindowByReference, arg4: IntByReference, arg5: IntByReference, arg6: IntByReference, arg7: IntByReference, arg8: IntByReference): boolean;
    XQueryTree(arg0: X11$Display, arg1: X11$Window, arg2: X11$WindowByReference, arg3: X11$WindowByReference, arg4: PointerByReference, arg5: IntByReference): number;
    XRaiseWindow(arg0: X11$Display, arg1: X11$Window): number;
    XResizeWindow(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: number): number;
    XRootWindow(arg0: X11$Display, arg1: number): X11$Window;
    XSelectInput(arg0: X11$Display, arg1: X11$Window, arg2: NativeLong): number;
    XSendEvent(arg0: X11$Display, arg1: X11$Window, arg2: number, arg3: NativeLong, arg4: X11$XEvent): number;
    XSetBackground(arg0: X11$Display, arg1: X11$GC, arg2: NativeLong): number;
    XSetErrorHandler(arg0: X11$XErrorHandler): X11$XErrorHandler;
    XSetFillRule(arg0: X11$Display, arg1: X11$GC, arg2: number): number;
    XSetForeground(arg0: X11$Display, arg1: X11$GC, arg2: NativeLong): number;
    XSetModifierMapping(arg0: X11$Display, arg1: X11$XModifierKeymapRef): number;
    XSetWMProperties(arg0: X11$Display, arg1: X11$Window, arg2: string, arg3: string, arg4: string[], arg5: number, arg6: X11$XSizeHints, arg7: Pointer, arg8: Pointer): void;
    XSetWMProtocols(arg0: X11$Display, arg1: X11$Window, arg2: X11$Atom[], arg3: number): number;
    XStringToKeysym(arg0: string): X11$KeySym;
    XSync(arg0: X11$Display, arg1: boolean): number;
    XTranslateCoordinates(arg0: X11$Display, arg1: X11$Window, arg2: X11$Window, arg3: number, arg4: number, arg5: IntByReference, arg6: IntByReference, arg7: X11$WindowByReference): boolean;
    XUngrabKey(arg0: X11$Display, arg1: number, arg2: number, arg3: X11$Window): number;
    XUngrabKeyboard(arg0: X11$Display, arg1: NativeLong): number;
    XUnmapWindow(arg0: X11$Display, arg1: X11$Window): number;
    XWindowEvent(arg0: X11$Display, arg1: X11$Window, arg2: NativeLong, arg3: X11$XEvent): number;
}