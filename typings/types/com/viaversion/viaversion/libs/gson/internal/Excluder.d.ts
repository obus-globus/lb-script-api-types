import type { ExclusionStrategy } from '../../../../../../com/viaversion/viaversion/libs/gson/ExclusionStrategy.d.ts'
import type { Gson } from '../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { Since } from '../../../../../../com/viaversion/viaversion/libs/gson/annotations/Since.d.ts'
import type { Until } from '../../../../../../com/viaversion/viaversion/libs/gson/annotations/Until.d.ts'
import type { TypeToken } from '../../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
export class Excluder extends Object implements TypeAdapterFactory, Cloneable {
    static DEFAULT: Excluder;
    constructor()
    // private deserializationStrategies: ExclusionStrategy[];
    // private modifiers: number;
    // private requireExpose: boolean;
    // private serializationStrategies: ExclusionStrategy[];
    // private serializeInnerClasses: boolean;
    // private version: number;
    clone(): Excluder;
    protected clone(): Object;
    create<T extends unknown>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
    disableInnerClassSerialization(): Excluder;
    excludeClass(arg0: Class<Object>, arg1: boolean): boolean;
    excludeField(arg0: Field, arg1: boolean): boolean;
    excludeFieldsWithoutExposeAnnotation(): Excluder;
    // private isValidSince(arg0: Since): boolean;
    // private isValidUntil(arg0: Until): boolean;
    // private isValidVersion(arg0: Since, arg1: Until): boolean;
    withExclusionStrategy(arg0: ExclusionStrategy, arg1: boolean, arg2: boolean): Excluder;
    withModifiers(arg0: number[]): Excluder;
    withVersion(arg0: number): Excluder;
}