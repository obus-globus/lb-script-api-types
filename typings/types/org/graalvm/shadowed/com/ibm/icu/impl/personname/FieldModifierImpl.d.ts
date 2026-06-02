import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName$FieldModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$FieldModifier.d.ts'
export abstract class FieldModifierImpl extends Object {
    static forName(parammodifierID: PersonName$FieldModifier, paramformatterImpl: PersonNameFormatterImpl): FieldModifierImpl;
    constructor()
    modifyField(fieldValue: string): string;
}