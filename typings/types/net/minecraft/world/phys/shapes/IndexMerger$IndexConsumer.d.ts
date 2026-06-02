import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IndexMerger$IndexConsumer extends Object{
    merge(firstIndex: number, secondIndex: number, resultIndex: number): boolean;
}