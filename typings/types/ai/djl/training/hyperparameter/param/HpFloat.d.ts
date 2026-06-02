import type { Hyperparameter } from '../../../../../ai/djl/training/hyperparameter/param/Hyperparameter.d.ts'
export class HpFloat extends Hyperparameter<number> {
    constructor(arg0: string, arg1: number, arg2: number, arg3: boolean)
    // private log: boolean;
    // private lower: number;
    // private upper: number;
    random(): number;
    toString(): string;
}