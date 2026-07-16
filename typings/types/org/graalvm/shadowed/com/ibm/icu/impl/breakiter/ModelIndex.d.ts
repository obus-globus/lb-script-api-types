import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ModelIndex extends Enum<ModelIndex> {
    static kBWStart: ModelIndex;
    static kTWStart: ModelIndex;
    static kUWStart: ModelIndex;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ModelIndex;
    static values(): ModelIndex[];
    private constructor(value: number)
    readonly value: number;
    getValue(): number;
    name(): "kUWStart" | "kBWStart" | "kTWStart";
}