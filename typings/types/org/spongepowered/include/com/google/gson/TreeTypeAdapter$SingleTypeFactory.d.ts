import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Gson } from '../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { JsonDeserializer } from '../../../../../../org/spongepowered/include/com/google/gson/JsonDeserializer.d.ts'
import type { JsonSerializer } from '../../../../../../org/spongepowered/include/com/google/gson/JsonSerializer.d.ts'
import type { TypeAdapter } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { TypeToken } from '../../../../../../org/spongepowered/include/com/google/gson/reflect/TypeToken.d.ts'
export class TreeTypeAdapter$SingleTypeFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: Object, arg1: TypeToken<Object>, arg2: boolean, arg3: Class<Object>, arg4: any)
    // private deserializer: JsonDeserializer<Object>;
    // private exactType: TypeToken<Object>;
    // private hierarchyType: Class<Object>;
    // private matchRawType: boolean;
    // private serializer: JsonSerializer<Object>;
    create<T extends unknown>(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
}