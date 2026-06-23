import type { Hyperparameter } from '../../../../../ai/djl/training/hyperparameter/param/Hyperparameter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HpCategorical<T extends unknown> extends Hyperparameter<T> {
    constructor(arg0: string, arg1: T[])
    // private categories: T[];
    random(): T;
    toString(): string;
}