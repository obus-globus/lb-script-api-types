import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FilterCoder extends Object{
    changesSize(): boolean;
    lastOK(): boolean;
    nonLastOK(): boolean;
}