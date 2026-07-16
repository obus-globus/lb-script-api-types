import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class StreamingTranslator$Support extends Enum<StreamingTranslator$Support> {
    static ASYNC: StreamingTranslator$Support;
    static BOTH: StreamingTranslator$Support;
    static ITERATIVE: StreamingTranslator$Support;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StreamingTranslator$Support;
    static values(): StreamingTranslator$Support[];
    private constructor(arg2: boolean, arg3: boolean)
    // private async: boolean;
    // private iterative: boolean;
    async(): boolean;
    iterative(): boolean;
    name(): "ITERATIVE" | "ASYNC" | "BOTH";
}