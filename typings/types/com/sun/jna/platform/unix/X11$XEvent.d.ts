import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { X11$XAnyEvent } from '../../../../../com/sun/jna/platform/unix/X11$XAnyEvent.d.ts'
import type { X11$XButtonEvent } from '../../../../../com/sun/jna/platform/unix/X11$XButtonEvent.d.ts'
import type { X11$XCirculateEvent } from '../../../../../com/sun/jna/platform/unix/X11$XCirculateEvent.d.ts'
import type { X11$XCirculateRequestEvent } from '../../../../../com/sun/jna/platform/unix/X11$XCirculateRequestEvent.d.ts'
import type { X11$XClientMessageEvent } from '../../../../../com/sun/jna/platform/unix/X11$XClientMessageEvent.d.ts'
import type { X11$XColormapEvent } from '../../../../../com/sun/jna/platform/unix/X11$XColormapEvent.d.ts'
import type { X11$XConfigureEvent } from '../../../../../com/sun/jna/platform/unix/X11$XConfigureEvent.d.ts'
import type { X11$XConfigureRequestEvent } from '../../../../../com/sun/jna/platform/unix/X11$XConfigureRequestEvent.d.ts'
import type { X11$XCreateWindowEvent } from '../../../../../com/sun/jna/platform/unix/X11$XCreateWindowEvent.d.ts'
import type { X11$XCrossingEvent } from '../../../../../com/sun/jna/platform/unix/X11$XCrossingEvent.d.ts'
import type { X11$XDestroyWindowEvent } from '../../../../../com/sun/jna/platform/unix/X11$XDestroyWindowEvent.d.ts'
import type { X11$XErrorEvent } from '../../../../../com/sun/jna/platform/unix/X11$XErrorEvent.d.ts'
import type { X11$XExposeEvent } from '../../../../../com/sun/jna/platform/unix/X11$XExposeEvent.d.ts'
import type { X11$XFocusChangeEvent } from '../../../../../com/sun/jna/platform/unix/X11$XFocusChangeEvent.d.ts'
import type { X11$XGenericEvent } from '../../../../../com/sun/jna/platform/unix/X11$XGenericEvent.d.ts'
import type { X11$XGenericEventCookie } from '../../../../../com/sun/jna/platform/unix/X11$XGenericEventCookie.d.ts'
import type { X11$XGraphicsExposeEvent } from '../../../../../com/sun/jna/platform/unix/X11$XGraphicsExposeEvent.d.ts'
import type { X11$XGravityEvent } from '../../../../../com/sun/jna/platform/unix/X11$XGravityEvent.d.ts'
import type { X11$XKeyEvent } from '../../../../../com/sun/jna/platform/unix/X11$XKeyEvent.d.ts'
import type { X11$XKeymapEvent } from '../../../../../com/sun/jna/platform/unix/X11$XKeymapEvent.d.ts'
import type { X11$XMapEvent } from '../../../../../com/sun/jna/platform/unix/X11$XMapEvent.d.ts'
import type { X11$XMapRequestEvent } from '../../../../../com/sun/jna/platform/unix/X11$XMapRequestEvent.d.ts'
import type { X11$XMappingEvent } from '../../../../../com/sun/jna/platform/unix/X11$XMappingEvent.d.ts'
import type { X11$XMotionEvent } from '../../../../../com/sun/jna/platform/unix/X11$XMotionEvent.d.ts'
import type { X11$XNoExposeEvent } from '../../../../../com/sun/jna/platform/unix/X11$XNoExposeEvent.d.ts'
import type { X11$XPropertyEvent } from '../../../../../com/sun/jna/platform/unix/X11$XPropertyEvent.d.ts'
import type { X11$XReparentEvent } from '../../../../../com/sun/jna/platform/unix/X11$XReparentEvent.d.ts'
import type { X11$XResizeRequestEvent } from '../../../../../com/sun/jna/platform/unix/X11$XResizeRequestEvent.d.ts'
import type { X11$XSelectionClearEvent } from '../../../../../com/sun/jna/platform/unix/X11$XSelectionClearEvent.d.ts'
import type { X11$XSelectionEvent } from '../../../../../com/sun/jna/platform/unix/X11$XSelectionEvent.d.ts'
import type { X11$XSelectionRequestEvent } from '../../../../../com/sun/jna/platform/unix/X11$XSelectionRequestEvent.d.ts'
import type { X11$XUnmapEvent } from '../../../../../com/sun/jna/platform/unix/X11$XUnmapEvent.d.ts'
import type { X11$XVisibilityEvent } from '../../../../../com/sun/jna/platform/unix/X11$XVisibilityEvent.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class X11$XEvent extends Union {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    pad: NativeLong[];
    type: number;
    xany: X11$XAnyEvent;
    xbutton: X11$XButtonEvent;
    xcirculate: X11$XCirculateEvent;
    xcirculaterequest: X11$XCirculateRequestEvent;
    xclient: X11$XClientMessageEvent;
    xcolormap: X11$XColormapEvent;
    xconfigure: X11$XConfigureEvent;
    xconfigurerequest: X11$XConfigureRequestEvent;
    xcookie: X11$XGenericEventCookie;
    xcreatewindow: X11$XCreateWindowEvent;
    xcrossing: X11$XCrossingEvent;
    xdestroywindow: X11$XDestroyWindowEvent;
    xerror: X11$XErrorEvent;
    xexpose: X11$XExposeEvent;
    xfocus: X11$XFocusChangeEvent;
    xgeneric: X11$XGenericEvent;
    xgraphicsexpose: X11$XGraphicsExposeEvent;
    xgravity: X11$XGravityEvent;
    xkey: X11$XKeyEvent;
    xkeymap: X11$XKeymapEvent;
    xmap: X11$XMapEvent;
    xmapping: X11$XMappingEvent;
    xmaprequest: X11$XMapRequestEvent;
    xmotion: X11$XMotionEvent;
    xnoexpose: X11$XNoExposeEvent;
    xproperty: X11$XPropertyEvent;
    xreparent: X11$XReparentEvent;
    xresizerequest: X11$XResizeRequestEvent;
    xselection: X11$XSelectionEvent;
    xselectionclear: X11$XSelectionClearEvent;
    xselectionrequest: X11$XSelectionRequestEvent;
    xunmap: X11$XUnmapEvent;
    xvisibility: X11$XVisibilityEvent;
}