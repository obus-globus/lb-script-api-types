import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$StaticObjectStorageStrategies extends Enum<PolyglotEngineOptions$StaticObjectStorageStrategies> {
    static ARRAY_BASED: PolyglotEngineOptions$StaticObjectStorageStrategies;
    static DEFAULT: PolyglotEngineOptions$StaticObjectStorageStrategies;
    static FIELD_BASED: PolyglotEngineOptions$StaticObjectStorageStrategies;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PolyglotEngineOptions$StaticObjectStorageStrategies;
    static values(): (Object | null)[];
    private constructor()
    name(): "DEFAULT" | "ARRAY_BASED" | "FIELD_BASED";
}