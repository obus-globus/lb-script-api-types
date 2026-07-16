import type { Object } from '../../../java/lang/Object.d.ts'
export class Synchronized_commonKt extends Object {
    static synchronized<T extends unknown>(lock: Object, block: () => T): T;
}