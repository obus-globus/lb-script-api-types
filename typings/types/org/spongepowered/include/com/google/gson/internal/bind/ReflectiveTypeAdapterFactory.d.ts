import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FieldNamingStrategy } from '../../../../../../../../org/spongepowered/include/com/google/gson/FieldNamingStrategy.d.ts'
import type { Gson } from '../../../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/ConstructorConstructor.d.ts'
import type { Excluder } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/Excluder.d.ts'
import type { ReflectiveTypeAdapterFactory$BoundField } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/bind/ReflectiveTypeAdapterFactory$BoundField.d.ts'
import type { TypeToken } from '../../../../../../../../org/spongepowered/include/com/google/gson/reflect/TypeToken.d.ts'
export class ReflectiveTypeAdapterFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: ConstructorConstructor, arg1: FieldNamingStrategy, arg2: Excluder)
    // private constructorConstructor: ConstructorConstructor;
    // private excluder: Excluder;
    // private fieldNamingPolicy: FieldNamingStrategy;
    create<T extends Object | number | string | boolean>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
    // private createBoundField(arg0: Gson, arg1: Field, arg2: string, arg3: TypeToken<Object>, arg4: boolean, arg5: boolean): ReflectiveTypeAdapterFactory$BoundField;
    excludeField(arg0: Field, arg1: boolean): boolean;
    // private getBoundFields(arg0: Gson, arg1: TypeToken<Object>, arg2: Class<Object>): { [key: string]: ReflectiveTypeAdapterFactory$BoundField };
    // private getFieldName(arg0: Field): string;
}