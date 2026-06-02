import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IntTrie } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/IntTrie.d.ts'
import type { PropsVectors$CompactHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/PropsVectors$CompactHandler.d.ts'
export class PropsVectors extends Object {
    static ERROR_VALUE_CP: number;
    static FIRST_SPECIAL_CP: number;
    static INITIAL_ROWS: number;
    static INITIAL_VALUE_CP: number;
    static MAX_CP: number;
    static MAX_ROWS: number;
    static MEDIUM_ROWS: number;
    constructor(numOfColumns: number)
    // private columns: number;
    // private isCompacted: boolean;
    // private maxRows: number;
    // private prevRow: number;
    // private rows: number;
    // private v: number[];
    // private areElementsSame(index1: number, target: number[], index2: number, length: number): boolean;
    compact(compactor: PropsVectors$CompactHandler): void;
    compactToTrieWithRowIndexes(): IntTrie;
    // private findRow(rangeStart: number): number;
    getCompactedArray(): number[];
    getCompactedColumns(): number;
    getCompactedRows(): number;
    getRow(rowIndex: number): number[];
    getRowEnd(rowIndex: number): number;
    getRowStart(rowIndex: number): number;
    getValue(c: number, column: number): number;
    setValue(start: number, end: number, column: number, value: number, mask: number): void;
}