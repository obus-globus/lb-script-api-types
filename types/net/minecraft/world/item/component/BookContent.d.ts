import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
export interface BookContent<T extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object{
    pages(): Filterable<T>[];
    withReplacedPages(newPages: Filterable<T>[]): C;
}