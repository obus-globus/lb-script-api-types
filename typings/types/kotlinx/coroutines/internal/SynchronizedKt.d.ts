import type { Object } from '../../../java/lang/Object.d.ts'
export class SynchronizedKt extends Object {
    static synchronizedImpl<T extends unknown>(lock: Object, block: () => T): T;
}