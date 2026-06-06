import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResettableStorage<T extends Object | number | string | boolean> extends Object {
    constructor()
    constructor(arg0: T)
    // private value: T;
    get(): T;
    isSet(): boolean;
    set(arg0: T): void;
    unset(): void;
}