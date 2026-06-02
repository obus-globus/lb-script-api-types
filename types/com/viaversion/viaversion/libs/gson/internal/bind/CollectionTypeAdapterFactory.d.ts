import type { Gson } from '../../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/ConstructorConstructor.d.ts'
import type { TypeToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CollectionTypeAdapterFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: ConstructorConstructor)
    // private constructorConstructor: ConstructorConstructor;
    create(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
}