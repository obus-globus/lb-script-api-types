import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Flags$BooleanFlagField } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$BooleanFlagField.d.ts'
export class JvmFlags extends Object {
    static INSTANCE: JvmFlags;
    private constructor()
    getIS_COMPILED_IN_COMPATIBILITY_MODE(): Flags$BooleanFlagField;
    getIS_COMPILED_IN_JVM_DEFAULT_MODE(): Flags$BooleanFlagField;
    getIS_MOVED_FROM_INTERFACE_COMPANION(): Flags$BooleanFlagField;
}