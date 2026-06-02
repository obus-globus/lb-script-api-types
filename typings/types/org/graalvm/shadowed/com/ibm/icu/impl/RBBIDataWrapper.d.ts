import type { PrintStream } from '../../../../../../../java/io/PrintStream.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RBBIDataWrapper$RBBIDataHeader } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/RBBIDataWrapper$RBBIDataHeader.d.ts'
import type { RBBIDataWrapper$RBBIStateTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/RBBIDataWrapper$RBBIStateTable.d.ts'
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
    static charToString(paramn: string, paramwidth: number): string;
    static equals(paramleft: RBBIDataWrapper$RBBIStateTable, paramright: RBBIDataWrapper$RBBIStateTable): boolean;
    static get(parambytes: ByteBuffer): RBBIDataWrapper;
    static intToHexString(paramn: number, paramwidth: number): string;
    static intToString(paramn: number, paramwidth: number): string;
    constructor()
    fFTable: RBBIDataWrapper$RBBIStateTable;
    fHeader: RBBIDataWrapper$RBBIDataHeader;
    fRTable: RBBIDataWrapper$RBBIStateTable;
    fRuleSource: string;
    fStatusTable: number[];
    fTrie: (Object | null)[];
    dump(out: PrintStream): void;
    // private dumpCharCategories(out: PrintStream): void;
    // private dumpRow(out: PrintStream, table: RBBIDataWrapper$RBBIStateTable, state: string): void;
    // private dumpTable(out: PrintStream, table: RBBIDataWrapper$RBBIStateTable): void;
    getRowIndex(state: number): number;
}