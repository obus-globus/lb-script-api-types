import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XCreateWindowEvent extends Struct<XCreateWindowEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BORDER_WIDTH: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAY: number;
    static HEIGHT: number;
    static OVERRIDE_REDIRECT: number;
    static PARENT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static TYPE: number;
    static WIDTH: number;
    static WINDOW: number;
    static X: number;
    static Y: number;
    static calloc(): XCreateWindowEvent;
    static calloc(paramarg0: MemoryStack): XCreateWindowEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XCreateWindowEvent;
    static create(paramarg0: number): XCreateWindowEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XCreateWindowEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XCreateWindowEvent;
    static malloc(paramarg0: MemoryStack): XCreateWindowEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nborder_width(paramarg0: number): number;
    static nborder_width(paramarg0: number, paramarg1: number): void;
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static noverride_redirect(paramarg0: number): number;
    static noverride_redirect(paramarg0: number, paramarg1: number): void;
    static nparent(paramarg0: number): number;
    static nparent(paramarg0: number, paramarg1: number): void;
    static nsend_event(paramarg0: number): number;
    static nsend_event(paramarg0: number, paramarg1: number): void;
    static nserial(paramarg0: number): number;
    static nserial(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static nwindow(paramarg0: number): number;
    static nwindow(paramarg0: number, paramarg1: number): void;
    static nx(paramarg0: number): number;
    static nx(paramarg0: number, paramarg1: number): void;
    static ny(paramarg0: number): number;
    static ny(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    border_width(): number;
    border_width(arg0: number): XCreateWindowEvent;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): XCreateWindowEvent;
    display(): number;
    display(arg0: number): XCreateWindowEvent;
    height(): number;
    height(arg0: number): XCreateWindowEvent;
    override_redirect(): number;
    override_redirect(arg0: number): XCreateWindowEvent;
    parent(): number;
    parent(arg0: number): XCreateWindowEvent;
    send_event(): boolean;
    send_event(arg0: boolean): XCreateWindowEvent;
    serial(): number;
    serial(arg0: number): XCreateWindowEvent;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): XCreateWindowEvent;
    set(arg0: XCreateWindowEvent): XCreateWindowEvent;
    sizeof(): number;
    type(): number;
    type(arg0: number): XCreateWindowEvent;
    width(): number;
    width(arg0: number): XCreateWindowEvent;
    window(): number;
    window(arg0: number): XCreateWindowEvent;
    x(): number;
    x(arg0: number): XCreateWindowEvent;
    y(): number;
    y(arg0: number): XCreateWindowEvent;
}