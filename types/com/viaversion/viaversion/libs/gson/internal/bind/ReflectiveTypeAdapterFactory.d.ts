import type { FieldNamingStrategy } from '../../../../../../../com/viaversion/viaversion/libs/gson/FieldNamingStrategy.d.ts'
import type { Gson } from '../../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { ReflectionAccessFilter } from '../../../../../../../com/viaversion/viaversion/libs/gson/ReflectionAccessFilter.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/ConstructorConstructor.d.ts'
import type { Excluder } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/Excluder.d.ts'
import type { JsonAdapterAnnotationTypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/JsonAdapterAnnotationTypeAdapterFactory.d.ts'
import type { ReflectiveTypeAdapterFactory$BoundField } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/ReflectiveTypeAdapterFactory$BoundField.d.ts'
import type { ReflectiveTypeAdapterFactory$FieldsData } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/ReflectiveTypeAdapterFactory$FieldsData.d.ts'
import type { TypeToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ReflectiveTypeAdapterFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: ConstructorConstructor, arg1: FieldNamingStrategy, arg2: Excluder, arg3: JsonAdapterAnnotationTypeAdapterFactory, arg4: ReflectionAccessFilter[])
    // private constructorConstructor: ConstructorConstructor;
    // private excluder: Excluder;
    // private fieldNamingPolicy: FieldNamingStrategy;
    // private jsonAdapterFactory: JsonAdapterAnnotationTypeAdapterFactory;
    // private reflectionFilters: ReflectionAccessFilter[];
    create(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
    // private createBoundField(arg0: Gson, arg1: Field, arg2: Method, arg3: string, arg4: TypeToken<Object>, arg5: boolean, arg6: boolean): ReflectiveTypeAdapterFactory$BoundField;
    // private getBoundFields(arg0: Gson, arg1: TypeToken<Object>, arg2: Class<Object>, arg3: boolean, arg4: boolean): ReflectiveTypeAdapterFactory$FieldsData;
    // private getFieldNames(arg0: Field): string[];
    // private includeField(arg0: Field, arg1: boolean): boolean;
}