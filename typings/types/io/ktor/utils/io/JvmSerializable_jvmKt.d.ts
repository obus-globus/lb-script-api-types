import type { JvmSerializer } from '../../../../io/ktor/utils/io/JvmSerializer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JvmSerializable_jvmKt extends Object {
    static JvmSerializerReplacement<T extends unknown>(serializer: JvmSerializer<T>, value: T): Object;
}