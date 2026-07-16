import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XUnmapEvent extends Struct<XUnmapEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAY: number;
    static EVENT: number;
    static FROM_CONFIGURE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static TYPE: number;
    static WINDOW: number;
    static calloc(): XUnmapEvent;
    static calloc(paramarg0: MemoryStack): XUnmapEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XUnmapEvent;
    static create(paramarg0: number): XUnmapEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XUnmapEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XUnmapEvent;
    static malloc(paramarg0: MemoryStack): XUnmapEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nevent(paramarg0: number): number;
    static nevent(paramarg0: number, paramarg1: number): void;
    static nfrom_configure(paramarg0: number): number;
    static nfrom_configure(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): XUnmapEvent;
    display(): number;
    display(arg0: number): XUnmapEvent;
    event(): number;
    event(arg0: number): XUnmapEvent;
    from_configure(): number;
    from_configure(arg0: number): XUnmapEvent;
    send_event(): boolean;
    send_event(arg0: boolean): XUnmapEvent;
    serial(): number;
    serial(arg0: number): XUnmapEvent;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number): XUnmapEvent;
    set(arg0: XUnmapEvent): XUnmapEvent;
    sizeof(): number;
    type(): number;
    type(arg0: number): XUnmapEvent;
    window(): number;
    window(arg0: number): XUnmapEvent;
}