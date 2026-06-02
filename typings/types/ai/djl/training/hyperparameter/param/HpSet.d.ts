import type { Hyperparameter } from '../../../../../ai/djl/training/hyperparameter/param/Hyperparameter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HpSet extends Hyperparameter<HpSet> {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Hyperparameter<Object>[])
    // private hyperParams: { [key: string]: Hyperparameter<Object> };
    add(arg0: Hyperparameter<Object>): void;
    getHParam(arg0: string): Hyperparameter<Object>;
    random(): HpSet;
    toString(): string;
}