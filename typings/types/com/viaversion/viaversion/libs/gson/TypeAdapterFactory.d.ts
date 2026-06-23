import type { Gson } from '../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeToken } from '../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TypeAdapterFactory extends Object{
    create<T extends unknown>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
}