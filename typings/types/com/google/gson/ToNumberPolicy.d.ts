import type { ToNumberStrategy } from '../../../com/google/gson/ToNumberStrategy.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class ToNumberPolicy extends Enum<ToNumberPolicy> implements ToNumberStrategy {
    static BIG_DECIMAL: ToNumberPolicy;
    static DOUBLE: ToNumberPolicy;
    static LAZILY_PARSED_NUMBER: ToNumberPolicy;
    static LONG_OR_DOUBLE: ToNumberPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ToNumberPolicy;
    static values(): ToNumberPolicy[];
    private constructor()
    readNumber(arg0: JsonReader): Number;
    name(): "DOUBLE" | "LAZILY_PARSED_NUMBER" | "LONG_OR_DOUBLE" | "BIG_DECIMAL";
}