import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ValueClassRepresentation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
export class ValueClassUtilKt extends Object {
    static loadValueClassRepresentation(paramarg0: ProtoBuf$Class, paramarg1: boolean, paramarg2: NameResolver, paramarg3: TypeTable, paramarg4: Function1<Object, Object>, paramarg5: Function1<Object, Object>): ValueClassRepresentation<Object>;
}