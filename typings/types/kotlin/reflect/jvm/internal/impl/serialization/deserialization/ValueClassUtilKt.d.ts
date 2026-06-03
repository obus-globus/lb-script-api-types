import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ValueClassRepresentation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
export class ValueClassUtilKt extends Object {
    static loadValueClassRepresentation(paramarg0: ProtoBuf$Class, paramarg1: boolean, paramarg2: NameResolver, paramarg3: TypeTable, paramarg4: (param0: Object | null) => Object | null, paramarg5: (param0: Object | null) => Object | null): ValueClassRepresentation<Object>;
}