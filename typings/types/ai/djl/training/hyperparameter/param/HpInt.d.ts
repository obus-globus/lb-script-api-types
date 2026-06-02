import type { Hyperparameter } from '../../../../../ai/djl/training/hyperparameter/param/Hyperparameter.d.ts'
export class HpInt extends Hyperparameter<number> {
    constructor(arg0: string, arg1: number, arg2: number)
    // private lower: number;
    // private upper: number;
    random(): number;
    toString(): string;
}