import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { ExclusionStrategy } from '../../../../../../../org/spongepowered/include/com/google/gson/ExclusionStrategy.d.ts'
import type { Gson } from '../../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { Since } from '../../../../../../../org/spongepowered/include/com/google/gson/annotations/Since.d.ts'
import type { Until } from '../../../../../../../org/spongepowered/include/com/google/gson/annotations/Until.d.ts'
import type { TypeToken } from '../../../../../../../org/spongepowered/include/com/google/gson/reflect/TypeToken.d.ts'
export class Excluder extends Object implements Cloneable, TypeAdapterFactory {
    static DEFAULT: Excluder;
    constructor()
    // private deserializationStrategies: ExclusionStrategy[];
    // private modifiers: number;
    // private requireExpose: boolean;
    // private serializationStrategies: ExclusionStrategy[];
    // private serializeInnerClasses: boolean;
    // private version: number;
    protected clone(): Object;
    clone(): Excluder;
    create<T extends unknown>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
    excludeClass(arg0: Class<Object>, arg1: boolean): boolean;
    excludeField(arg0: Field, arg1: boolean): boolean;
    // private isAnonymousOrLocal(arg0: Class<Object>): boolean;
    // private isInnerClass(arg0: Class<Object>): boolean;
    // private isStatic(arg0: Class<Object>): boolean;
    // private isValidSince(arg0: Since): boolean;
    // private isValidUntil(arg0: Until): boolean;
    // private isValidVersion(arg0: Since, arg1: Until): boolean;
}