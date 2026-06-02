import type { IntTrieBuilder } from '../../../../com/ibm/icu/impl/IntTrieBuilder.d.ts'
import type { PropsVectors$CompactHandler } from '../../../../com/ibm/icu/impl/PropsVectors$CompactHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PVecToTrieCompactHandler extends Object implements PropsVectors$CompactHandler {
    constructor()
    builder: IntTrieBuilder;
    initialValue: number;
    setRowIndexForErrorValue(arg0: number): void;
    setRowIndexForInitialValue(arg0: number): void;
    setRowIndexForRange(arg0: number, arg1: number, arg2: number): void;
    startRealValues(arg0: number): void;
}