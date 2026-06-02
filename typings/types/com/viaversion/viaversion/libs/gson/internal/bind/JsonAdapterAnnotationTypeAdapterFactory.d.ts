import type { Gson } from '../../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { JsonAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/annotations/JsonAdapter.d.ts'
import type { ConstructorConstructor } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/ConstructorConstructor.d.ts'
import type { TypeToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JsonAdapterAnnotationTypeAdapterFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: ConstructorConstructor)
    // private adapterFactoryMap: Map<Class<Object>, TypeAdapterFactory>;
    // private constructorConstructor: ConstructorConstructor;
    create(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
    getTypeAdapter(arg0: ConstructorConstructor, arg1: Gson, arg2: TypeToken<Object>, arg3: JsonAdapter, arg4: boolean): TypeAdapter<Object>;
    isClassJsonAdapterFactory(arg0: TypeToken<Object>, arg1: TypeAdapterFactory): boolean;
    // private putFactoryAndGetCurrent(arg0: Class<Object>, arg1: TypeAdapterFactory): TypeAdapterFactory;
}