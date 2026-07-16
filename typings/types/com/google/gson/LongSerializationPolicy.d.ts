import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class LongSerializationPolicy extends Enum<LongSerializationPolicy> {
    static DEFAULT: LongSerializationPolicy;
    static STRING: LongSerializationPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LongSerializationPolicy;
    static values(): LongSerializationPolicy[];
    constructor(arg2: LongSerializationPolicy)
    serialize(arg0: number): JsonElement;
    typeAdapter(): TypeAdapter<Number>;
    name(): "DEFAULT" | "STRING";
}