import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Lists extends Object {
    static asList(paramfirst: Object | null, paramsecond: Object | null, paramrest: (Object | null)[]): (Object | null)[];
    static asList(paramfirst: Object | null, paramrest: (Object | null)[]): (Object | null)[];
    static cartesianProduct(...paramlists: (Object | null)[][]): (Object | null)[][];
    static cartesianProduct(paramlists: (Object | null)[][]): (Object | null)[][];
    static charactersOf(paramstring: string): string[];
    static charactersOf(paramsequence: CharSequence): string[];
    static newArrayList(): (Object | null)[];
    static newArrayList(...paramelements: (Object | null)[]): (Object | null)[];
    static newArrayList(paramelements: (Object | null)[]): (Object | null)[];
    static newArrayList(paramelements: Iterator<Object>): (Object | null)[];
    static newArrayListWithCapacity(paraminitialArraySize: number): (Object | null)[];
    static newArrayListWithExpectedSize(paramestimatedSize: number): (Object | null)[];
    static newCopyOnWriteArrayList(): (Object | null)[];
    static newCopyOnWriteArrayList(paramelements: (Object | null)[]): (Object | null)[];
    static newLinkedList(): (Object | null)[];
    static newLinkedList(paramelements: (Object | null)[]): (Object | null)[];
    static partition(paramlist: (Object | null)[], paramsize: number): (Object | null)[][];
    static reverse(paramlist: (Object | null)[]): (Object | null)[];
    static transform(paramfromList: (Object | null)[], paramfunction: (param0: Object) => Object | null): (Object | null)[];
    private constructor()
}