import type { Object } from '../java/lang/Object.d.ts'
export class DeepRecursiveScope<T extends unknown, R extends unknown> extends Object {
    protected constructor()
    callRecursive(value: T): R;
}