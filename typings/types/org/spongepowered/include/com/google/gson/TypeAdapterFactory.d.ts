import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Gson } from '../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeToken } from '../../../../../../org/spongepowered/include/com/google/gson/reflect/TypeToken.d.ts'
export interface TypeAdapterFactory extends Object{
    create<T extends Object | number | string | boolean>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
}