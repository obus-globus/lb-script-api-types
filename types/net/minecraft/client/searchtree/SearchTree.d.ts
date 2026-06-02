import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SearchTree<T extends Object | number | string | boolean> extends Object{
    search(text: string): T[];
}