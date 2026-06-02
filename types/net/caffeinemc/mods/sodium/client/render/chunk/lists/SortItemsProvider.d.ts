import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface SortItemsProvider extends Object{
    ensureSortItemsOfLength(arg0: number): number[];
    getCachedSortItems(): number[];
    setCachedSortItems(arg0: number[]): void;
}