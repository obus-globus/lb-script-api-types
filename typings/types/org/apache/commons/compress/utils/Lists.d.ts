import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class Lists extends Object {
    static newArrayList<E extends unknown>(): E[];
    static newArrayList<E extends unknown>(paramarg0: Iterator<E>): E[];
    private constructor()
}