import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XColormapEvent extends Struct<XColormapEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORMAP: number;
    static DISPLAY: number;
    static NEW: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static STATE: number;
    static TYPE: number;
    static WINDOW: number;
    static calloc(): XColormapEvent;
    static calloc(paramarg0: MemoryStack): XColormapEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XColormapEvent;
    static create(paramarg0: number): XColormapEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XColormapEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XColormapEvent;
    static malloc(paramarg0: MemoryStack): XColormapEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolormap(paramarg0: number): number;
    static ncolormap(paramarg0: number, paramarg1: number): void;
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nnew$(paramarg0: number): number;
    static nnew$(paramarg0: number, paramarg1: number): void;
    static nsend_event(paramarg0: number): number;
    static nsend_event(paramarg0: number, paramarg1: number): void;
    static nserial(paramarg0: number): number;
    static nserial(paramarg0: number, paramarg1: number): void;
    static nstate(paramarg0: number): number;
    static nstate(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nwindow(paramarg0: number): number;
    static nwindow(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colormap(): number;
    colormap(arg0: number): XColormapEvent;
    create(arg0: number, arg1: ByteBuffer): XColormapEvent;
    display(): number;
    display(arg0: number): XColormapEvent;
    new$(): number;
    new$(arg0: number): XColormapEvent;
    send_event(): boolean;
    send_event(arg0: boolean): XColormapEvent;
    serial(): number;
    serial(arg0: number): XColormapEvent;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): XColormapEvent;
    set(arg0: XColormapEvent): XColormapEvent;
    sizeof(): number;
    state(): number;
    state(arg0: number): XColormapEvent;
    type(): number;
    type(arg0: number): XColormapEvent;
    window(): number;
    window(arg0: number): XColormapEvent;
}