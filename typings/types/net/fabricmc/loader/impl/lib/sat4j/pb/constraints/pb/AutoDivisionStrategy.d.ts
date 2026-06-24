import type { AutoDivisionStrategy$1 } from '../../../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
export class AutoDivisionStrategy extends Enum<AutoDivisionStrategy> {
    static DISABLED: AutoDivisionStrategy;
    static ENABLED: AutoDivisionStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AutoDivisionStrategy;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: AutoDivisionStrategy$1)
    toString(): string;
    name(): "DISABLED" | "ENABLED";
}