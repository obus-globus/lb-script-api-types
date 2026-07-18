import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../../../kotlinx/serialization/KSerializer.d.ts'
export class TypeKt extends Object {
    static serializer(self: TypeInfo): KSerializer<Object>;
    static typeInfo(): TypeInfo;
    static typeOfOrNull(): KType | null;
}