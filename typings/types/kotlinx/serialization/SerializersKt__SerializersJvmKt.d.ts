import type { Type } from '../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializersModule } from '../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class SerializersKt__SerializersJvmKt extends Object {
    static serializer(paramarg0: Type): KSerializer<Object>;
    static serializer(paramarg0: SerializersModule, paramarg1: Type): KSerializer<Object>;
    static serializerOrNull(paramarg0: Type): KSerializer<Object>;
    static serializerOrNull(paramarg0: SerializersModule, paramarg1: Type): KSerializer<Object>;
}