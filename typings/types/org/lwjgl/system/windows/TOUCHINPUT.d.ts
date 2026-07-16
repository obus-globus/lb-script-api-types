import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class TOUCHINPUT extends Struct<TOUCHINPUT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CXCONTACT: number;
    static CYCONTACT: number;
    static DWEXTRAINFO: number;
    static DWFLAGS: number;
    static DWID: number;
    static DWMASK: number;
    static DWTIME: number;
    static HSOURCE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static X: number;
    static Y: number;
    static calloc(): TOUCHINPUT;
    static calloc(paramarg0: MemoryStack): TOUCHINPUT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): TOUCHINPUT;
    static create(paramarg0: number): TOUCHINPUT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): TOUCHINPUT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): TOUCHINPUT;
    static malloc(paramarg0: MemoryStack): TOUCHINPUT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncxContact(paramarg0: number): number;
    static ncyContact(paramarg0: number): number;
    static ndwExtraInfo(paramarg0: number): number;
    static ndwFlags(paramarg0: number): number;
    static ndwID(paramarg0: number): number;
    static ndwMask(paramarg0: number): number;
    static ndwTime(paramarg0: number): number;
    static nhSource(paramarg0: number): number;
    static nx(paramarg0: number): number;
    static ny(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): TOUCHINPUT;
    cxContact(): number;
    cyContact(): number;
    dwExtraInfo(): number;
    dwFlags(): number;
    dwID(): number;
    dwMask(): number;
    dwTime(): number;
    hSource(): number;
    sizeof(): number;
    x(): number;
    y(): number;
}