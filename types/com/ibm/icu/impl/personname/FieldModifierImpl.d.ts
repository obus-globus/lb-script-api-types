import type { PersonNameFormatterImpl } from '../../../../../com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName$FieldModifier } from '../../../../../com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class FieldModifierImpl extends Object {
    static forName(paramarg0: PersonName$FieldModifier, paramarg1: PersonNameFormatterImpl): FieldModifierImpl;
    constructor()
    modifyField(arg0: string): string;
}