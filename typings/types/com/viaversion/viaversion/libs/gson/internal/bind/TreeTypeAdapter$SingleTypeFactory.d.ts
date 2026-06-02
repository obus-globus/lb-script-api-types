import type { Gson } from '../../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { JsonDeserializer } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializer.d.ts'
import type { JsonSerializer } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializer.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { TypeToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TreeTypeAdapter$SingleTypeFactory extends Object implements TypeAdapterFactory {
    constructor(arg0: Object, arg1: TypeToken<Object>, arg2: boolean, arg3: Class<Object>)
    // private deserializer: JsonDeserializer<Object>;
    // private exactType: TypeToken<Object>;
    // private hierarchyType: Class<Object>;
    // private matchRawType: boolean;
    // private serializer: JsonSerializer<Object>;
    create(arg0: Gson, arg1: TypeToken<T>): TypeAdapter<T>;
}