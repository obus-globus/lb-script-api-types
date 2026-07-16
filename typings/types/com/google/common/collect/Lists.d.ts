import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Lists extends Object {
    static asList<E extends unknown>(paramfirst: E, paramsecond: E, paramrest: E[]): E[];
    static asList<E extends unknown>(paramfirst: E, paramrest: E[]): E[];
    static cartesianProduct<B extends unknown>(...paramlists: B[][]): B[][];
    static cartesianProduct<B extends unknown>(paramlists: B[][]): B[][];
    static charactersOf(paramstring: string): string[];
    static charactersOf(paramsequence: CharSequence): string[];
    static newArrayList<E extends unknown>(): E[];
    static newArrayList<E extends unknown>(...paramelements: E[]): E[];
    static newArrayList<E extends unknown>(paramelements: E[]): E[];
    static newArrayList<E extends unknown>(paramelements: Iterator<E>): E[];
    static newArrayListWithCapacity<E extends unknown>(paraminitialArraySize: number): E[];
    static newArrayListWithExpectedSize<E extends unknown>(paramestimatedSize: number): E[];
    static newCopyOnWriteArrayList<E extends unknown>(): E[];
    static newCopyOnWriteArrayList<E extends unknown>(paramelements: E[]): E[];
    static newLinkedList<E extends unknown>(): E[];
    static newLinkedList<E extends unknown>(paramelements: E[]): E[];
    static partition<T extends unknown>(paramlist: T[], paramsize: number): T[][];
    static reverse<T extends unknown>(paramlist: T[]): T[];
    static transform<F extends unknown, T extends unknown>(paramfromList: F[], paramfunction: (param0: Object) => T): T[];
    private constructor()
}