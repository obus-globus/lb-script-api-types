import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EntryStreamOffsets extends Object{
    getDataOffset(): number;
    isStreamContiguous(): boolean;
}