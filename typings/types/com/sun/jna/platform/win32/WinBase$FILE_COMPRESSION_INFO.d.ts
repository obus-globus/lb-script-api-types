import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$LARGE_INTEGER } from '../../../../../com/sun/jna/platform/win32/WinNT$LARGE_INTEGER.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinBase$FILE_COMPRESSION_INFO extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    static sizeOf(): number;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: WinNT$LARGE_INTEGER, arg1: number, arg2: number, arg3: number, arg4: number)
    ChunkShift: number;
    ClusterShift: number;
    CompressedFileSize: WinNT$LARGE_INTEGER;
    CompressionFormat: number;
    CompressionUnitShift: number;
    Reserved: number[];
}