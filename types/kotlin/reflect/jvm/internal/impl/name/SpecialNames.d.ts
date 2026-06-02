import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class SpecialNames extends Object {
    static ANONYMOUS: Name;
    static ANONYMOUS_FQ_NAME: FqName;
    static ARRAY: Name;
    static DEFAULT_NAME_FOR_COMPANION_OBJECT: Name;
    static DESTRUCT: Name;
    static ENUM_GET_ENTRIES: Name;
    static IMPLICIT_SET_PARAMETER: Name;
    static INIT: Name;
    static INSTANCE: SpecialNames;
    static ITERATOR: Name;
    static LOCAL: Name;
    static NO_NAME_PROVIDED: Name;
    static RECEIVER: Name;
    static ROOT_PACKAGE: Name;
    static SAFE_IDENTIFIER_FOR_NO_NAME: Name;
    static THIS: Name;
    static UNARY: Name;
    static UNDERSCORE_FOR_UNUSED_VAR: Name;
    static WHEN_SUBJECT: Name;
    static safeIdentifier(paramarg0: Name): Name;
    private constructor()
    isSafeIdentifier(arg0: Name): boolean;
}