import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class XErrorEvent extends Struct<XErrorEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAY: number;
    static ERROR_CODE: number;
    static MINOR_CODE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REQUEST_CODE: number;
    static RESOURCEID: number;
    static SERIAL: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): XErrorEvent;
    static calloc(paramarg0: MemoryStack): XErrorEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): XErrorEvent;
    static create(paramarg0: number): XErrorEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): XErrorEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): XErrorEvent;
    static malloc(paramarg0: MemoryStack): XErrorEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nerror_code(paramarg0: number): number;
    static nerror_code(paramarg0: number, paramarg1: number): void;
    static nminor_code(paramarg0: number): number;
    static nminor_code(paramarg0: number, paramarg1: number): void;
    static nrequest_code(paramarg0: number): number;
    static nrequest_code(paramarg0: number, paramarg1: number): void;
    static nresourceid(paramarg0: number): number;
    static nresourceid(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): XErrorEvent;
    display(): number;
    display(arg0: number): XErrorEvent;
    error_code(): number;
    error_code(arg0: number): XErrorEvent;
    minor_code(): number;
    minor_code(arg0: number): XErrorEvent;
    request_code(): number;
    request_code(arg0: number): XErrorEvent;
    resourceid(): number;
    resourceid(arg0: number): XErrorEvent;
    serial(): number;
    serial(arg0: number): XErrorEvent;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): XErrorEvent;
    set(arg0: XErrorEvent): XErrorEvent;
    sizeof(): number;
    type(): number;
    type(arg0: number): XErrorEvent;
}