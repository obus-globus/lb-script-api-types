import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XMappingEvent extends Struct<XMappingEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COUNT: number;
    static DISPLAY: number;
    static FIRST_KEYCODE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REQUEST: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static TYPE: number;
    static WINDOW: number;
    static calloc(): XMappingEvent;
    static calloc(paramarg0: MemoryStack): XMappingEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XMappingEvent;
    static create(paramarg0: number): XMappingEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XMappingEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XMappingEvent;
    static malloc(paramarg0: MemoryStack): XMappingEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncount(paramarg0: number): number;
    static ncount(paramarg0: number, paramarg1: number): void;
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nfirst_keycode(paramarg0: number): number;
    static nfirst_keycode(paramarg0: number, paramarg1: number): void;
    static nrequest(paramarg0: number): number;
    static nrequest(paramarg0: number, paramarg1: number): void;
    static nsend_event(paramarg0: number): number;
    static nsend_event(paramarg0: number, paramarg1: number): void;
    static nserial(paramarg0: number): number;
    static nserial(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nwindow(paramarg0: number): number;
    static nwindow(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    count(): number;
    count(arg0: number): XMappingEvent;
    create(arg0: number, arg1: ByteBuffer): XMappingEvent;
    display(): number;
    display(arg0: number): XMappingEvent;
    first_keycode(): number;
    first_keycode(arg0: number): XMappingEvent;
    request(): number;
    request(arg0: number): XMappingEvent;
    send_event(): boolean;
    send_event(arg0: boolean): XMappingEvent;
    serial(): number;
    serial(arg0: number): XMappingEvent;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): XMappingEvent;
    set(arg0: XMappingEvent): XMappingEvent;
    sizeof(): number;
    type(): number;
    type(arg0: number): XMappingEvent;
    window(): number;
    window(arg0: number): XMappingEvent;
}