import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface PropsVectors$CompactHandler extends Object{
    setRowIndexForErrorValue(rowIndex: number): void;
    setRowIndexForInitialValue(rowIndex: number): void;
    setRowIndexForRange(start: number, end: number, rowIndex: number): void;
    startRealValues(rowIndex: number): void;
}