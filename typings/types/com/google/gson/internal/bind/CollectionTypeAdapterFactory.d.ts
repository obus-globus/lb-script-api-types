import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../../../com/google/gson/internal/ConstructorConstructor.d.ts'
import type { TypeToken } from '../../../../../com/google/gson/reflect/TypeToken.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollectionTypeAdapterFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: ConstructorConstructor)
    // private constructorConstructor: ConstructorConstructor;
    create<T extends unknown>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
}