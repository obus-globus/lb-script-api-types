import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XGenericEventCookie extends Struct<XGenericEventCookie> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COOKIE: number;
    static DATA: number;
    static DISPLAY: number;
    static EVTYPE: number;
    static EXTENSION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): XGenericEventCookie;
    static calloc(paramarg0: MemoryStack): XGenericEventCookie;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XGenericEventCookie;
    static create(paramarg0: number): XGenericEventCookie;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XGenericEventCookie;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XGenericEventCookie;
    static malloc(paramarg0: MemoryStack): XGenericEventCookie;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncookie(paramarg0: number): number;
    static ncookie(paramarg0: number, paramarg1: number): void;
    static ndata(paramarg0: number, paramarg1: number): ByteBuffer;
    static ndata(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nevtype(paramarg0: number): number;
    static nevtype(paramarg0: number, paramarg1: number): void;
    static nextension(paramarg0: number): number;
    static nextension(paramarg0: number, paramarg1: number): void;
    static nsend_event(paramarg0: number): number;
    static nsend_event(paramarg0: number, paramarg1: number): void;
    static nserial(paramarg0: number): number;
    static nserial(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cookie(): number;
    cookie(arg0: number): XGenericEventCookie;
    create(arg0: number, arg1: ByteBuffer): XGenericEventCookie;
    data(arg0: ByteBuffer): XGenericEventCookie;
    data(arg0: number): ByteBuffer;
    display(): number;
    display(arg0: number): XGenericEventCookie;
    evtype(): number;
    evtype(arg0: number): XGenericEventCookie;
    extension(): number;
    extension(arg0: number): XGenericEventCookie;
    send_event(): boolean;
    send_event(arg0: boolean): XGenericEventCookie;
    serial(): number;
    serial(arg0: number): XGenericEventCookie;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ByteBuffer): XGenericEventCookie;
    set(arg0: XGenericEventCookie): XGenericEventCookie;
    sizeof(): number;
    type(): number;
    type(arg0: number): XGenericEventCookie;
}