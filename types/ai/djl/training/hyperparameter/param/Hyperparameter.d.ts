import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Hyperparameter<T extends Object | number | string | boolean> extends Object {
    constructor(arg0: string)
    name: string;
    getName(): string;
    random(): T;
}