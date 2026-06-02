import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LongSerializationPolicy extends Enum<LongSerializationPolicy> {
    static DEFAULT: LongSerializationPolicy;
    static STRING: LongSerializationPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LongSerializationPolicy;
    static values(): (Object | null)[];
    private constructor()
    serialize(arg0: number): JsonElement;
    name(): "DEFAULT" | "STRING";
}