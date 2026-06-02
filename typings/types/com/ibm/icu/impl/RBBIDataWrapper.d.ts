import type { RBBIDataWrapper$RBBIDataHeader } from '../../../../com/ibm/icu/impl/RBBIDataWrapper$RBBIDataHeader.d.ts'
import type { RBBIDataWrapper$RBBIStateTable } from '../../../../com/ibm/icu/impl/RBBIDataWrapper$RBBIStateTable.d.ts'
import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RBBIDataWrapper extends Object {
    static ACCEPTING: number;
    static ACCEPTING_UNCONDITIONAL: number;
    static DATA_FORMAT: number;
    static DH_CATCOUNT: number;
    static DH_FORMATVERSION: number;
    static DH_FTABLE: number;
    static DH_FTABLELEN: number;
    static DH_LENGTH: number;
    static DH_MAGIC: number;
    static DH_RTABLE: number;
    static DH_RTABLELEN: number;
    static DH_RULESOURCE: number;
    static DH_RULESOURCELEN: number;
    static DH_SIZE: number;
    static DH_STATUSTABLE: number;
    static DH_STATUSTABLELEN: number;
    static DH_TRIE: number;
    static DH_TRIELEN: number;
    static FORMAT_VERSION: number;
    static LOOKAHEAD: number;
    static NEXTSTATES: number;
    static RBBI_8BITS_ROWS: number;
    static RBBI_BOF_REQUIRED: number;
    static RBBI_LOOKAHEAD_HARD_BREAK: number;
    static TAGSIDX: number;
    static charToString(paramarg0: string, paramarg1: number): string;
    static equals(paramarg0: RBBIDataWrapper$RBBIStateTable, paramarg1: RBBIDataWrapper$RBBIStateTable): boolean;
    static get(paramarg0: ByteBuffer): RBBIDataWrapper;
    static intToHexString(paramarg0: number, paramarg1: number): string;
    static intToString(paramarg0: number, paramarg1: number): string;
    constructor()
    fFTable: RBBIDataWrapper$RBBIStateTable;
    fHeader: RBBIDataWrapper$RBBIDataHeader;
    fRTable: RBBIDataWrapper$RBBIStateTable;
    fRuleSource: string;
    fStatusTable: number[];
    fTrie: (Object | null)[];
    dump(arg0: PrintStream): void;
    // private dumpCharCategories(arg0: PrintStream): void;
    // private dumpRow(arg0: PrintStream, arg1: RBBIDataWrapper$RBBIStateTable, arg2: string): void;
    // private dumpTable(arg0: PrintStream, arg1: RBBIDataWrapper$RBBIStateTable): void;
    getRowIndex(arg0: number): number;
}