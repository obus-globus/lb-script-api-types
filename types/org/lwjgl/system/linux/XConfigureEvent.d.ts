import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XConfigureEvent extends Struct<XConfigureEvent> implements NativeResource {
    static ABOVE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BORDER_WIDTH: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAY: number;
    static HEIGHT: number;
    static OVERRIDE_REDIRECT: number;
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
    static calloc(): XConfigureEvent;
    static calloc(paramarg0: MemoryStack): XConfigureEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XConfigureEvent;
    static create(paramarg0: number): XConfigureEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XConfigureEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XConfigureEvent;
    static malloc(paramarg0: MemoryStack): XConfigureEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nabove(paramarg0: number): number;
    static nabove(paramarg0: number, paramarg1: number): void;
    static nborder_width(paramarg0: number): number;
    static nborder_width(paramarg0: number, paramarg1: number): void;
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static noverride_redirect(paramarg0: number): number;
    static noverride_redirect(paramarg0: number, paramarg1: number): void;
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
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    above(): number;
    above(arg0: number): XConfigureEvent;
    border_width(): number;
    border_width(arg0: number): XConfigureEvent;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): XConfigureEvent;
    display(): number;
    display(arg0: number): XConfigureEvent;
    height(): number;
    height(arg0: number): XConfigureEvent;
    override_redirect(): boolean;
    override_redirect(arg0: boolean): XConfigureEvent;
    send_event(): boolean;
    send_event(arg0: boolean): XConfigureEvent;
    serial(): number;
    serial(arg0: number): XConfigureEvent;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: boolean): XConfigureEvent;
    set(arg0: XConfigureEvent): XConfigureEvent;
    sizeof(): number;
    type(): number;
    type(arg0: number): XConfigureEvent;
    width(): number;
    width(arg0: number): XConfigureEvent;
    window(): number;
    window(arg0: number): XConfigureEvent;
    x(): number;
    x(arg0: number): XConfigureEvent;
    y(): number;
    y(arg0: number): XConfigureEvent;
}