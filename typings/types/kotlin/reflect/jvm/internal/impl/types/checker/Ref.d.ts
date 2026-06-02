import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Ref<T extends Object | number | string | boolean> extends Object {
    readonly value: T;
    getValue(): T;
}