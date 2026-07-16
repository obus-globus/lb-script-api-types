import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Sets extends Object {
    static newHashSet<E extends unknown>(): E[];
    static newHashSet<E extends unknown>(...paramarg0: E[]): E[];
    static newHashSetWithExpectedSize<E extends unknown>(paramarg0: number): E[];
    static unmodifiableNavigableSet<E extends unknown>(paramarg0: E[]): E[];
}