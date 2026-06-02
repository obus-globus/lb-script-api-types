import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { RECT } from '../../../../org/lwjgl/system/windows/RECT.d.ts'
export class MONITORINFOEX extends Struct<MONITORINFOEX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CBSIZE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DWFLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RCMONITOR: number;
    static RCWORK: number;
    static SIZEOF: number;
    static SZDEVICE: number;
    static calloc(): MONITORINFOEX;
    static calloc(paramarg0: MemoryStack): MONITORINFOEX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): MONITORINFOEX;
    static create(paramarg0: number): MONITORINFOEX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): MONITORINFOEX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): MONITORINFOEX;
    static malloc(paramarg0: MemoryStack): MONITORINFOEX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncbSize(paramarg0: number): number;
    static ncbSize(paramarg0: number, paramarg1: number): void;
    static ndwFlags(paramarg0: number): number;
    static nrcMonitor(paramarg0: number): RECT;
    static nrcWork(paramarg0: number): RECT;
    static nszDevice(paramarg0: number): ByteBuffer;
    static nszDeviceString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cbSize(): number;
    cbSize(arg0: number): MONITORINFOEX;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): MONITORINFOEX;
    dwFlags(): number;
    rcMonitor(): RECT;
    rcWork(): RECT;
    set(arg0: MONITORINFOEX): MONITORINFOEX;
    sizeof(): number;
    szDevice(): ByteBuffer;
    szDeviceString(): string;
}