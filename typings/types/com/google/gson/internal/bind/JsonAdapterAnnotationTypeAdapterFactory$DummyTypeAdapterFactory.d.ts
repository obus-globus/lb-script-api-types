import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { TypeToken } from '../../../../../com/google/gson/reflect/TypeToken.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsonAdapterAnnotationTypeAdapterFactory$DummyTypeAdapterFactory extends Object implements TypeAdapterFactory {
    private constructor()
    create<T extends unknown>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
}