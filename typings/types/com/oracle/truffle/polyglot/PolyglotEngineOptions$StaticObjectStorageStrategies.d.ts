import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$StaticObjectStorageStrategies extends Enum<PolyglotEngineOptions$StaticObjectStorageStrategies> {
    static ARRAY_BASED: PolyglotEngineOptions$StaticObjectStorageStrategies;
    static DEFAULT: PolyglotEngineOptions$StaticObjectStorageStrategies;
    static FIELD_BASED: PolyglotEngineOptions$StaticObjectStorageStrategies;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotEngineOptions$StaticObjectStorageStrategies;
    static values(): PolyglotEngineOptions$StaticObjectStorageStrategies[];
    private constructor()
    name(): "DEFAULT" | "ARRAY_BASED" | "FIELD_BASED";
}