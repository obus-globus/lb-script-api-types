import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XNoExposeEvent extends Struct<XNoExposeEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAY: number;
    static DRAWABLE: number;
    static MAJOR_CODE: number;
    static MINOR_CODE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): XNoExposeEvent;
    static calloc(paramarg0: MemoryStack): XNoExposeEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XNoExposeEvent;
    static create(paramarg0: number): XNoExposeEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XNoExposeEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XNoExposeEvent;
    static malloc(paramarg0: MemoryStack): XNoExposeEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static ndrawable(paramarg0: number): number;
    static ndrawable(paramarg0: number, paramarg1: number): void;
    static nmajor_code(paramarg0: number): number;
    static nmajor_code(paramarg0: number, paramarg1: number): void;
    static nminor_code(paramarg0: number): number;
    static nminor_code(paramarg0: number, paramarg1: number): void;
    static nsend_event(paramarg0: number): number;
    static nsend_event(paramarg0: number, paramarg1: number): void;
    static nserial(paramarg0: number): number;
    static nserial(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): XNoExposeEvent;
    display(): number;
    display(arg0: number): XNoExposeEvent;
    drawable(): number;
    drawable(arg0: number): XNoExposeEvent;
    major_code(): number;
    major_code(arg0: number): XNoExposeEvent;
    minor_code(): number;
    minor_code(arg0: number): XNoExposeEvent;
    send_event(): boolean;
    send_event(arg0: boolean): XNoExposeEvent;
    serial(): number;
    serial(arg0: number): XNoExposeEvent;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number): XNoExposeEvent;
    set(arg0: XNoExposeEvent): XNoExposeEvent;
    sizeof(): number;
    type(): number;
    type(arg0: number): XNoExposeEvent;
}