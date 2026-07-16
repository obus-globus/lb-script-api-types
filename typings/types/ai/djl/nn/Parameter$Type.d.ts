import type { Initializer } from '../../../ai/djl/training/initializer/Initializer.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Parameter$Type extends Enum<Parameter$Type> {
    static BETA: Parameter$Type;
    static BIAS: Parameter$Type;
    static GAMMA: Parameter$Type;
    static OTHER: Parameter$Type;
    static RUNNING_MEAN: Parameter$Type;
    static RUNNING_VAR: Parameter$Type;
    static WEIGHT: Parameter$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Parameter$Type;
    static values(): Parameter$Type[];
    private constructor(arg2: Initializer)
    readonly initializer: Initializer;
    getInitializer(): Initializer;
    name(): "WEIGHT" | "BIAS" | "GAMMA" | "BETA" | "RUNNING_MEAN" | "RUNNING_VAR" | "OTHER";
}