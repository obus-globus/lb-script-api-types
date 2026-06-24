import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { LongSerializationPolicy } from '../../../com/google/gson/LongSerializationPolicy.d.ts'
import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class LongSerializationPolicy$1 extends LongSerializationPolicy {
    static DEFAULT: LongSerializationPolicy;
    static STRING: LongSerializationPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LongSerializationPolicy;
    static values(): (Object | null)[];
    serialize(arg0: number): JsonElement;
    typeAdapter(): TypeAdapter<Number>;
}