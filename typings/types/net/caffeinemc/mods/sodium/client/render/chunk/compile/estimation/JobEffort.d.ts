import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Abstract2DLinearEstimator$DataPair } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Abstract2DLinearEstimator$DataPair.d.ts'
export class JobEffort extends Record implements Abstract2DLinearEstimator$DataPair<Class<Object>> {
    static untilNowWithEffort(paramarg0: Class<Object>, paramarg1: number, paramarg2: number): JobEffort;
    constructor(category: Class<Object>, duration: number, effort: number)
    // private category: Class<Object>;
    // private duration: number;
    // private effort: number;
    category(): Class<Object>;
    duration(): number;
    effort(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    x(): number;
    y(): number;
}