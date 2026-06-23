import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Hyperparameter<T extends unknown> extends Object {
    constructor(arg0: string)
    name: string;
    getName(): string;
    random(): T;
}