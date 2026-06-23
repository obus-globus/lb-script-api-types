import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SearchTree<T extends unknown> extends Object{
    search(text: string): T[];
}