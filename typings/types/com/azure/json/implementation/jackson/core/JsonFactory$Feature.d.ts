import type { JacksonFeature } from '../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeature.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JsonFactory$Feature extends Enum<JsonFactory$Feature> implements JacksonFeature {
    static CANONICALIZE_FIELD_NAMES: JsonFactory$Feature;
    static FAIL_ON_SYMBOL_HASH_OVERFLOW: JsonFactory$Feature;
    static INTERN_FIELD_NAMES: JsonFactory$Feature;
    static USE_THREAD_LOCAL_FOR_BUFFER_RECYCLING: JsonFactory$Feature;
    static collectDefaults(): number;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonFactory$Feature;
    static values(): JsonFactory$Feature[];
    private constructor(arg2: boolean)
    // private _defaultState: boolean;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    name(): "INTERN_FIELD_NAMES" | "CANONICALIZE_FIELD_NAMES" | "FAIL_ON_SYMBOL_HASH_OVERFLOW" | "USE_THREAD_LOCAL_FOR_BUFFER_RECYCLING";
}