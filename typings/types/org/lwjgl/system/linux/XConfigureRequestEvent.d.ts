import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XConfigureRequestEvent extends Struct<XConfigureRequestEvent> implements NativeResource {
    static ABOVE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BORDER_WIDTH: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DETAIL: number;
    static DISPLAY: number;
    static HEIGHT: number;
    static PARENT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static TYPE: number;
    static VALUE_MASK: number;
    static WIDTH: number;
    static WINDOW: number;
    static X: number;
    static Y: number;
    static calloc(): XConfigureRequestEvent;
    static calloc(paramarg0: MemoryStack): XConfigureRequestEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XConfigureRequestEvent;
    static create(paramarg0: number): XConfigureRequestEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XConfigureRequestEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XConfigureRequestEvent;
    static malloc(paramarg0: MemoryStack): XConfigureRequestEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nabove(paramarg0: number): number;
    static nabove(paramarg0: number, paramarg1: number): void;
    static nborder_width(paramarg0: number): number;
    static nborder_width(paramarg0: number, paramarg1: number): void;
    static ndetail(paramarg0: number): number;
    static ndetail(paramarg0: number, paramarg1: number): void;
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static nparent(paramarg0: number): number;
    static nparent(paramarg0: number, paramarg1: number): void;
    static nsend_event(paramarg0: number): number;
    static nsend_event(paramarg0: number, paramarg1: number): void;
    static nserial(paramarg0: number): number;
    static nserial(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nvalue_mask(paramarg0: number): number;
    static nvalue_mask(paramarg0: number, paramarg1: number): void;
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
    above(): number;
    above(arg0: number): XConfigureRequestEvent;
    border_width(): number;
    border_width(arg0: number): XConfigureRequestEvent;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): XConfigureRequestEvent;
    detail(): number;
    detail(arg0: number): XConfigureRequestEvent;
    display(): number;
    display(arg0: number): XConfigureRequestEvent;
    height(): number;
    height(arg0: number): XConfigureRequestEvent;
    parent(): number;
    parent(arg0: number): XConfigureRequestEvent;
    send_event(): boolean;
    send_event(arg0: boolean): XConfigureRequestEvent;
    serial(): number;
    serial(arg0: number): XConfigureRequestEvent;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): XConfigureRequestEvent;
    set(arg0: XConfigureRequestEvent): XConfigureRequestEvent;
    sizeof(): number;
    type(): number;
    type(arg0: number): XConfigureRequestEvent;
    value_mask(): number;
    value_mask(arg0: number): XConfigureRequestEvent;
    width(): number;
    width(arg0: number): XConfigureRequestEvent;
    window(): number;
    window(arg0: number): XConfigureRequestEvent;
    x(): number;
    x(arg0: number): XConfigureRequestEvent;
    y(): number;
    y(arg0: number): XConfigureRequestEvent;
}