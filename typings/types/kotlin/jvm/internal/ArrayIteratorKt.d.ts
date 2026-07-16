import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class ArrayIteratorKt extends Object {
    static iterator<T extends unknown>(array: T[]): Iterator<T>;
}