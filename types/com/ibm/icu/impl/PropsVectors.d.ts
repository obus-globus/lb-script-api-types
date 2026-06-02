import type { IntTrie } from '../../../../com/ibm/icu/impl/IntTrie.d.ts'
import type { PropsVectors$CompactHandler } from '../../../../com/ibm/icu/impl/PropsVectors$CompactHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PropsVectors extends Object {
    static ERROR_VALUE_CP: number;
    static FIRST_SPECIAL_CP: number;
    static INITIAL_ROWS: number;
    static INITIAL_VALUE_CP: number;
    static MAX_CP: number;
    static MAX_ROWS: number;
    static MEDIUM_ROWS: number;
    constructor(arg0: number)
    // private columns: number;
    // private isCompacted: boolean;
    // private maxRows: number;
    // private prevRow: number;
    // private rows: number;
    // private v: number[];
    // private areElementsSame(arg0: number, arg1: number[], arg2: number, arg3: number): boolean;
    compact(arg0: PropsVectors$CompactHandler): void;
    compactToTrieWithRowIndexes(): IntTrie;
    // private findRow(arg0: number): number;
    getCompactedArray(): number[];
    getCompactedColumns(): number;
    getCompactedRows(): number;
    getRow(arg0: number): number[];
    getRowEnd(arg0: number): number;
    getRowStart(arg0: number): number;
    getValue(arg0: number, arg1: number): number;
    setValue(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
}