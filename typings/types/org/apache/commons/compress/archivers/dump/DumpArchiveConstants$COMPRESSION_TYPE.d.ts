import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DumpArchiveConstants$COMPRESSION_TYPE extends Enum<DumpArchiveConstants$COMPRESSION_TYPE> {
    static BZLIB: DumpArchiveConstants$COMPRESSION_TYPE;
    static LZO: DumpArchiveConstants$COMPRESSION_TYPE;
    static UNKNOWN: DumpArchiveConstants$COMPRESSION_TYPE;
    static ZLIB: DumpArchiveConstants$COMPRESSION_TYPE;
    static find(paramarg0: number): DumpArchiveConstants$COMPRESSION_TYPE;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DumpArchiveConstants$COMPRESSION_TYPE;
    static values(): DumpArchiveConstants$COMPRESSION_TYPE[];
    private constructor(arg2: number)
    // private code: number;
    name(): "UNKNOWN" | "ZLIB" | "BZLIB" | "LZO";
}