import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
export interface BookContent<T extends unknown, C extends unknown> extends Object{
    pages(): Filterable<T>[];
    withReplacedPages(newPages: Filterable<T>[]): C;
}