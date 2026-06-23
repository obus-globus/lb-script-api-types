import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Ref<T extends unknown> extends Object {
    readonly value: T;
    getValue(): T;
}