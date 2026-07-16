import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DumpArchiveConstants$SEGMENT_TYPE extends Enum<DumpArchiveConstants$SEGMENT_TYPE> {
    static ADDR: DumpArchiveConstants$SEGMENT_TYPE;
    static BITS: DumpArchiveConstants$SEGMENT_TYPE;
    static CLRI: DumpArchiveConstants$SEGMENT_TYPE;
    static END: DumpArchiveConstants$SEGMENT_TYPE;
    static INODE: DumpArchiveConstants$SEGMENT_TYPE;
    static TAPE: DumpArchiveConstants$SEGMENT_TYPE;
    static find(paramarg0: number): DumpArchiveConstants$SEGMENT_TYPE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DumpArchiveConstants$SEGMENT_TYPE;
    static values(): DumpArchiveConstants$SEGMENT_TYPE[];
    private constructor(arg2: number)
    // private code: number;
    name(): "TAPE" | "INODE" | "BITS" | "ADDR" | "END" | "CLRI";
}