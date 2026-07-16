import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingNAPI extends Struct<IOURingNAPI> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUSY_POLL_TO: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PAD: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFER_BUSY_POLL: number;
    static RESV: number;
    static SIZEOF: number;
    static calloc(): IOURingNAPI;
    static calloc(paramarg0: MemoryStack): IOURingNAPI;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingNAPI;
    static create(paramarg0: number): IOURingNAPI;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingNAPI;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingNAPI;
    static malloc(paramarg0: MemoryStack): IOURingNAPI;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbusy_poll_to(paramarg0: number): number;
    static nbusy_poll_to(paramarg0: number, paramarg1: number): void;
    static npad(paramarg0: number, paramarg1: number): number;
    static npad(paramarg0: number): ByteBuffer;
    static npad(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npad(paramarg0: number, paramarg1: ByteBuffer): void;
    static nprefer_busy_poll(paramarg0: number): number;
    static nprefer_busy_poll(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number): number;
    static nresv(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    busy_poll_to(): number;
    busy_poll_to(arg0: number): IOURingNAPI;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingNAPI;
    prefer_busy_poll(): number;
    prefer_busy_poll(arg0: number): IOURingNAPI;
    set(arg0: number, arg1: number): IOURingNAPI;
    set(arg0: IOURingNAPI): IOURingNAPI;
    sizeof(): number;
}