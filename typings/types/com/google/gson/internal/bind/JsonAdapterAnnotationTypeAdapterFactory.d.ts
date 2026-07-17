import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { JsonAdapter } from '../../../../../com/google/gson/annotations/JsonAdapter.d.ts'
import type { ConstructorConstructor } from '../../../../../com/google/gson/internal/ConstructorConstructor.d.ts'
import type { TypeToken } from '../../../../../com/google/gson/reflect/TypeToken.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsonAdapterAnnotationTypeAdapterFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: ConstructorConstructor)
    // private adapterFactoryMap: JavaMap<Class<Object>, TypeAdapterFactory>;
    // private constructorConstructor: ConstructorConstructor;
    create<T extends unknown>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
    getTypeAdapter(arg0: ConstructorConstructor, arg1: Gson, arg2: TypeToken<Object>, arg3: JsonAdapter, arg4: boolean): TypeAdapter<Object>;
    isClassJsonAdapterFactory(arg0: TypeToken<Object>, arg1: TypeAdapterFactory): boolean;
    // private putFactoryAndGetCurrent(arg0: Class<Object>, arg1: TypeAdapterFactory): TypeAdapterFactory;
}