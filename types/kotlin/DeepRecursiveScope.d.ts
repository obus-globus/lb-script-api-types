import type { Object } from '../java/lang/Object.d.ts'
export class DeepRecursiveScope<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    protected constructor()
    callRecursive(value: T): R;
}