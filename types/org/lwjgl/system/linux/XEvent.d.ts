import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { XAnyEvent } from '../../../../org/lwjgl/system/linux/XAnyEvent.d.ts'
import type { XButtonEvent } from '../../../../org/lwjgl/system/linux/XButtonEvent.d.ts'
import type { XCirculateEvent } from '../../../../org/lwjgl/system/linux/XCirculateEvent.d.ts'
import type { XCirculateRequestEvent } from '../../../../org/lwjgl/system/linux/XCirculateRequestEvent.d.ts'
import type { XClientMessageEvent } from '../../../../org/lwjgl/system/linux/XClientMessageEvent.d.ts'
import type { XColormapEvent } from '../../../../org/lwjgl/system/linux/XColormapEvent.d.ts'
import type { XConfigureEvent } from '../../../../org/lwjgl/system/linux/XConfigureEvent.d.ts'
import type { XConfigureRequestEvent } from '../../../../org/lwjgl/system/linux/XConfigureRequestEvent.d.ts'
import type { XCreateWindowEvent } from '../../../../org/lwjgl/system/linux/XCreateWindowEvent.d.ts'
import type { XCrossingEvent } from '../../../../org/lwjgl/system/linux/XCrossingEvent.d.ts'
import type { XDestroyWindowEvent } from '../../../../org/lwjgl/system/linux/XDestroyWindowEvent.d.ts'
import type { XErrorEvent } from '../../../../org/lwjgl/system/linux/XErrorEvent.d.ts'
import type { XExposeEvent } from '../../../../org/lwjgl/system/linux/XExposeEvent.d.ts'
import type { XFocusChangeEvent } from '../../../../org/lwjgl/system/linux/XFocusChangeEvent.d.ts'
import type { XGenericEvent } from '../../../../org/lwjgl/system/linux/XGenericEvent.d.ts'
import type { XGenericEventCookie } from '../../../../org/lwjgl/system/linux/XGenericEventCookie.d.ts'
import type { XGraphicsExposeEvent } from '../../../../org/lwjgl/system/linux/XGraphicsExposeEvent.d.ts'
import type { XGravityEvent } from '../../../../org/lwjgl/system/linux/XGravityEvent.d.ts'
import type { XKeyEvent } from '../../../../org/lwjgl/system/linux/XKeyEvent.d.ts'
import type { XKeymapEvent } from '../../../../org/lwjgl/system/linux/XKeymapEvent.d.ts'
import type { XMapEvent } from '../../../../org/lwjgl/system/linux/XMapEvent.d.ts'
import type { XMapRequestEvent } from '../../../../org/lwjgl/system/linux/XMapRequestEvent.d.ts'
import type { XMappingEvent } from '../../../../org/lwjgl/system/linux/XMappingEvent.d.ts'
import type { XMotionEvent } from '../../../../org/lwjgl/system/linux/XMotionEvent.d.ts'
import type { XNoExposeEvent } from '../../../../org/lwjgl/system/linux/XNoExposeEvent.d.ts'
import type { XPropertyEvent } from '../../../../org/lwjgl/system/linux/XPropertyEvent.d.ts'
import type { XReparentEvent } from '../../../../org/lwjgl/system/linux/XReparentEvent.d.ts'
import type { XResizeRequestEvent } from '../../../../org/lwjgl/system/linux/XResizeRequestEvent.d.ts'
import type { XSelectionClearEvent } from '../../../../org/lwjgl/system/linux/XSelectionClearEvent.d.ts'
import type { XSelectionEvent } from '../../../../org/lwjgl/system/linux/XSelectionEvent.d.ts'
import type { XSelectionRequestEvent } from '../../../../org/lwjgl/system/linux/XSelectionRequestEvent.d.ts'
import type { XUnmapEvent } from '../../../../org/lwjgl/system/linux/XUnmapEvent.d.ts'
import type { XVisibilityEvent } from '../../../../org/lwjgl/system/linux/XVisibilityEvent.d.ts'
export class XEvent extends Struct<XEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TYPE: number;
    static XANY: number;
    static XBUTTON: number;
    static XCIRCULATE: number;
    static XCIRCULATEREQUEST: number;
    static XCLIENT: number;
    static XCOLORMAP: number;
    static XCONFIGURE: number;
    static XCONFIGUREREQUEST: number;
    static XCOOKIE: number;
    static XCREATEWINDOW: number;
    static XCROSSING: number;
    static XDESTROYWINDOW: number;
    static XERROR: number;
    static XEXPOSE: number;
    static XFOCUS: number;
    static XGENERIC: number;
    static XGRAPHICSEXPOSE: number;
    static XGRAVITY: number;
    static XKEY: number;
    static XKEYMAP: number;
    static XMAP: number;
    static XMAPPING: number;
    static XMAPREQUEST: number;
    static XMOTION: number;
    static XNOEXPOSE: number;
    static XPROPERTY: number;
    static XREPARENT: number;
    static XRESIZEREQUEST: number;
    static XSELECTION: number;
    static XSELECTIONCLEAR: number;
    static XSELECTIONREQUEST: number;
    static XUNMAP: number;
    static XVISIBILITY: number;
    static calloc(): XEvent;
    static calloc(paramarg0: MemoryStack): XEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XEvent;
    static create(paramarg0: number): XEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XEvent;
    static malloc(paramarg0: MemoryStack): XEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ntype(paramarg0: number): number;
    static nxany(paramarg0: number): XAnyEvent;
    static nxbutton(paramarg0: number): XButtonEvent;
    static nxcirculate(paramarg0: number): XCirculateEvent;
    static nxcirculaterequest(paramarg0: number): XCirculateRequestEvent;
    static nxclient(paramarg0: number): XClientMessageEvent;
    static nxcolormap(paramarg0: number): XColormapEvent;
    static nxconfigure(paramarg0: number): XConfigureEvent;
    static nxconfigurerequest(paramarg0: number): XConfigureRequestEvent;
    static nxcookie(paramarg0: number): XGenericEventCookie;
    static nxcreatewindow(paramarg0: number): XCreateWindowEvent;
    static nxcrossing(paramarg0: number): XCrossingEvent;
    static nxdestroywindow(paramarg0: number): XDestroyWindowEvent;
    static nxerror(paramarg0: number): XErrorEvent;
    static nxexpose(paramarg0: number): XExposeEvent;
    static nxfocus(paramarg0: number): XFocusChangeEvent;
    static nxgeneric(paramarg0: number): XGenericEvent;
    static nxgraphicsexpose(paramarg0: number): XGraphicsExposeEvent;
    static nxgravity(paramarg0: number): XGravityEvent;
    static nxkey(paramarg0: number): XKeyEvent;
    static nxkeymap(paramarg0: number): XKeymapEvent;
    static nxmap(paramarg0: number): XMapEvent;
    static nxmapping(paramarg0: number): XMappingEvent;
    static nxmaprequest(paramarg0: number): XMapRequestEvent;
    static nxmotion(paramarg0: number): XMotionEvent;
    static nxnoexpose(paramarg0: number): XNoExposeEvent;
    static nxproperty(paramarg0: number): XPropertyEvent;
    static nxreparent(paramarg0: number): XReparentEvent;
    static nxresizerequest(paramarg0: number): XResizeRequestEvent;
    static nxselection(paramarg0: number): XSelectionEvent;
    static nxselectionclear(paramarg0: number): XSelectionClearEvent;
    static nxselectionrequest(paramarg0: number): XSelectionRequestEvent;
    static nxunmap(paramarg0: number): XUnmapEvent;
    static nxvisibility(paramarg0: number): XVisibilityEvent;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): XEvent;
    sizeof(): number;
    type(): number;
    xany(): XAnyEvent;
    xbutton(): XButtonEvent;
    xcirculate(): XCirculateEvent;
    xcirculaterequest(): XCirculateRequestEvent;
    xclient(): XClientMessageEvent;
    xcolormap(): XColormapEvent;
    xconfigure(): XConfigureEvent;
    xconfigurerequest(): XConfigureRequestEvent;
    xcookie(): XGenericEventCookie;
    xcreatewindow(): XCreateWindowEvent;
    xcrossing(): XCrossingEvent;
    xdestroywindow(): XDestroyWindowEvent;
    xerror(): XErrorEvent;
    xexpose(): XExposeEvent;
    xfocus(): XFocusChangeEvent;
    xgeneric(): XGenericEvent;
    xgraphicsexpose(): XGraphicsExposeEvent;
    xgravity(): XGravityEvent;
    xkey(): XKeyEvent;
    xkeymap(): XKeymapEvent;
    xmap(): XMapEvent;
    xmapping(): XMappingEvent;
    xmaprequest(): XMapRequestEvent;
    xmotion(): XMotionEvent;
    xnoexpose(): XNoExposeEvent;
    xproperty(): XPropertyEvent;
    xreparent(): XReparentEvent;
    xresizerequest(): XResizeRequestEvent;
    xselection(): XSelectionEvent;
    xselectionclear(): XSelectionClearEvent;
    xselectionrequest(): XSelectionRequestEvent;
    xunmap(): XUnmapEvent;
    xvisibility(): XVisibilityEvent;
}