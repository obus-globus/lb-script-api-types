import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IntTrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/IntTrieBuilder.d.ts'
import type { PropsVectors$CompactHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/PropsVectors$CompactHandler.d.ts'
export class PVecToTrieCompactHandler extends Object implements PropsVectors$CompactHandler {
    constructor()
    builder: IntTrieBuilder;
    initialValue: number;
    setRowIndexForErrorValue(rowIndex: number): void;
    setRowIndexForInitialValue(rowIndex: number): void;
    setRowIndexForRange(start: number, end: number, rowIndex: number): void;
    startRealValues(rowIndex: number): void;
}