import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class JsonWriteState extends Enum<JsonWriteState> {
    static ARRAY: JsonWriteState;
    static COMPLETED: JsonWriteState;
    static FIELD: JsonWriteState;
    static OBJECT: JsonWriteState;
    static ROOT: JsonWriteState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonWriteState;
    static values(): JsonWriteState[];
    private constructor()
    name(): "ROOT" | "OBJECT" | "ARRAY" | "FIELD" | "COMPLETED";
}