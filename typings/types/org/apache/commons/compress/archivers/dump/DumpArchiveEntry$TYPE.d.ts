import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DumpArchiveEntry$TYPE extends Enum<DumpArchiveEntry$TYPE> {
    static BLKDEV: DumpArchiveEntry$TYPE;
    static CHRDEV: DumpArchiveEntry$TYPE;
    static DIRECTORY: DumpArchiveEntry$TYPE;
    static FIFO: DumpArchiveEntry$TYPE;
    static FILE: DumpArchiveEntry$TYPE;
    static LINK: DumpArchiveEntry$TYPE;
    static SOCKET: DumpArchiveEntry$TYPE;
    static UNKNOWN: DumpArchiveEntry$TYPE;
    static WHITEOUT: DumpArchiveEntry$TYPE;
    static find(paramarg0: number): DumpArchiveEntry$TYPE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DumpArchiveEntry$TYPE;
    static values(): DumpArchiveEntry$TYPE[];
    private constructor(arg2: number)
    // private code: number;
    name(): "WHITEOUT" | "SOCKET" | "LINK" | "FILE" | "BLKDEV" | "DIRECTORY" | "CHRDEV" | "FIFO" | "UNKNOWN";
}