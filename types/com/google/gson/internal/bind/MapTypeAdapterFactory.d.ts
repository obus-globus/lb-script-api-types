import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../../../com/google/gson/internal/ConstructorConstructor.d.ts'
import type { TypeToken } from '../../../../../com/google/gson/reflect/TypeToken.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MapTypeAdapterFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: ConstructorConstructor, arg1: boolean)
    // private complexMapKeySerialization: boolean;
    // private constructorConstructor: ConstructorConstructor;
    create(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
    // private getKeyAdapter(arg0: Gson, arg1: Type): TypeAdapter<Object>;
}