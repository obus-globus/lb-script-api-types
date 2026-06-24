import type { ToNumberPolicy$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ToNumberStrategy } from '../../../../../com/viaversion/viaversion/libs/gson/ToNumberStrategy.d.ts'
import type { JsonReader } from '../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class ToNumberPolicy extends Enum<ToNumberPolicy> implements ToNumberStrategy {
    static BIG_DECIMAL: ToNumberPolicy;
    static DOUBLE: ToNumberPolicy;
    static LAZILY_PARSED_NUMBER: ToNumberPolicy;
    static LONG_OR_DOUBLE: ToNumberPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ToNumberPolicy;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: ToNumberPolicy$1)
    readNumber(arg0: JsonReader): Number;
    name(): "DOUBLE" | "LAZILY_PARSED_NUMBER" | "LONG_OR_DOUBLE" | "BIG_DECIMAL";
}