import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Class$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class$Kind.d.ts'
import type { ProtoBuf$MemberKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$MemberKind.d.ts'
import type { ProtoBuf$Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Modality.d.ts'
import type { ProtoBuf$ReturnValueStatus } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ReturnValueStatus.d.ts'
import type { ProtoBuf$Visibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Visibility.d.ts'
import type { Flags$BooleanFlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$BooleanFlagField.d.ts'
import type { Flags$FlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$FlagField.d.ts'
export class Flags extends Object {
    static CLASS_KIND: Flags$FlagField<ProtoBuf$Class$Kind>;
    static DECLARES_DEFAULT_VALUE: Flags$BooleanFlagField;
    static DEFINITELY_NOT_NULL_TYPE: Flags$BooleanFlagField;
    static HAS_ANNOTATIONS: Flags$BooleanFlagField;
    static HAS_CONSTANT: Flags$BooleanFlagField;
    static HAS_ENUM_ENTRIES: Flags$BooleanFlagField;
    static HAS_GETTER: Flags$BooleanFlagField;
    static HAS_SETTER: Flags$BooleanFlagField;
    static IS_CONST: Flags$BooleanFlagField;
    static IS_CONSTRUCTOR_WITH_NON_STABLE_PARAMETER_NAMES: Flags$BooleanFlagField;
    static IS_CROSSINLINE: Flags$BooleanFlagField;
    static IS_DATA: Flags$BooleanFlagField;
    static IS_DELEGATED: Flags$BooleanFlagField;
    static IS_EXPECT_CLASS: Flags$BooleanFlagField;
    static IS_EXPECT_FUNCTION: Flags$BooleanFlagField;
    static IS_EXPECT_PROPERTY: Flags$BooleanFlagField;
    static IS_EXTERNAL_ACCESSOR: Flags$BooleanFlagField;
    static IS_EXTERNAL_CLASS: Flags$BooleanFlagField;
    static IS_EXTERNAL_FUNCTION: Flags$BooleanFlagField;
    static IS_EXTERNAL_PROPERTY: Flags$BooleanFlagField;
    static IS_FUNCTION_WITH_NON_STABLE_PARAMETER_NAMES: Flags$BooleanFlagField;
    static IS_FUN_INTERFACE: Flags$BooleanFlagField;
    static IS_INFIX: Flags$BooleanFlagField;
    static IS_INLINE: Flags$BooleanFlagField;
    static IS_INLINE_ACCESSOR: Flags$BooleanFlagField;
    static IS_INNER: Flags$BooleanFlagField;
    static IS_LATEINIT: Flags$BooleanFlagField;
    static IS_NEGATED: Flags$BooleanFlagField;
    static IS_NOINLINE: Flags$BooleanFlagField;
    static IS_NOT_DEFAULT: Flags$BooleanFlagField;
    static IS_NULL_CHECK_PREDICATE: Flags$BooleanFlagField;
    static IS_OPERATOR: Flags$BooleanFlagField;
    static IS_SECONDARY: Flags$BooleanFlagField;
    static IS_SUSPEND: Flags$BooleanFlagField;
    static IS_TAILREC: Flags$BooleanFlagField;
    static IS_UNSIGNED: Flags$BooleanFlagField;
    static IS_VALUE_CLASS: Flags$BooleanFlagField;
    static IS_VAR: Flags$BooleanFlagField;
    static MEMBER_KIND: Flags$FlagField<ProtoBuf$MemberKind>;
    static MODALITY: Flags$FlagField<ProtoBuf$Modality>;
    static RETURN_VALUE_STATUS_CTOR: Flags$FlagField<ProtoBuf$ReturnValueStatus>;
    static RETURN_VALUE_STATUS_FUNCTION: Flags$FlagField<ProtoBuf$ReturnValueStatus>;
    static RETURN_VALUE_STATUS_PROPERTY: Flags$FlagField<ProtoBuf$ReturnValueStatus>;
    static SUSPEND_TYPE: Flags$BooleanFlagField;
    static VISIBILITY: Flags$FlagField<ProtoBuf$Visibility>;
    static getAccessorFlags(paramarg0: boolean, paramarg1: ProtoBuf$Visibility, paramarg2: ProtoBuf$Modality, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean): number;
}