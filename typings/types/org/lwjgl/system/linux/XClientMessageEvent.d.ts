import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLongBuffer } from '../../../../org/lwjgl/CLongBuffer.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XClientMessageEvent extends Struct<XClientMessageEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static DATA_B: number;
    static DATA_L: number;
    static DATA_S: number;
    static DISPLAY: number;
    static FORMAT: number;
    static MESSAGE_TYPE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static TYPE: number;
    static WINDOW: number;
    static calloc(): XClientMessageEvent;
    static calloc(paramarg0: MemoryStack): XClientMessageEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XClientMessageEvent;
    static create(paramarg0: number): XClientMessageEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XClientMessageEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XClientMessageEvent;
    static malloc(paramarg0: MemoryStack): XClientMessageEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata_b(paramarg0: number, paramarg1: number): number;
    static ndata_b(paramarg0: number): ByteBuffer;
    static ndata_b(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndata_b(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndata_l(paramarg0: number, paramarg1: number): number;
    static ndata_l(paramarg0: number): CLongBuffer;
    static ndata_l(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndata_l(paramarg0: number, paramarg1: CLongBuffer): void;
    static ndata_s(paramarg0: number): ShortBuffer;
    static ndata_s(paramarg0: number, paramarg1: number): number;
    static ndata_s(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ndata_s(paramarg0: number, paramarg1: ShortBuffer): void;
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nmessage_type(paramarg0: number): number;
    static nmessage_type(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): XClientMessageEvent;
    data_b(): ByteBuffer;
    data_b(arg0: ByteBuffer): XClientMessageEvent;
    data_b(arg0: number): number;
    data_b(arg0: number, arg1: number): XClientMessageEvent;
    data_l(): CLongBuffer;
    data_l(arg0: number): number;
    data_l(arg0: number, arg1: number): XClientMessageEvent;
    data_l(arg0: CLongBuffer): XClientMessageEvent;
    data_s(): ShortBuffer;
    data_s(arg0: ShortBuffer): XClientMessageEvent;
    data_s(arg0: number): number;
    data_s(arg0: number, arg1: number): XClientMessageEvent;
    display(): number;
    display(arg0: number): XClientMessageEvent;
    format(): number;
    format(arg0: number): XClientMessageEvent;
    message_type(): number;
    message_type(arg0: number): XClientMessageEvent;
    send_event(): boolean;
    send_event(arg0: boolean): XClientMessageEvent;
    serial(): number;
    serial(arg0: number): XClientMessageEvent;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ByteBuffer, arg8: ShortBuffer, arg9: CLongBuffer): XClientMessageEvent;
    set(arg0: XClientMessageEvent): XClientMessageEvent;
    sizeof(): number;
    type(): number;
    type(arg0: number): XClientMessageEvent;
    window(): number;
    window(arg0: number): XClientMessageEvent;
}