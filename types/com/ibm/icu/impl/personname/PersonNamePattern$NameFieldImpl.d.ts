import type { FieldModifierImpl } from '../../../../../com/ibm/icu/impl/personname/FieldModifierImpl.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonNamePattern$Element } from '../../../../../com/ibm/icu/impl/personname/PersonNamePattern$Element.d.ts'
import type { PersonName } from '../../../../../com/ibm/icu/text/PersonName.d.ts'
import type { PersonName$FieldModifier } from '../../../../../com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { PersonName$NameField } from '../../../../../com/ibm/icu/text/PersonName$NameField.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PersonNamePattern$NameFieldImpl extends Object implements PersonNamePattern$Element {
    constructor(arg0: string, arg1: PersonNameFormatterImpl)
    // private fieldID: PersonName$NameField;
    // private modifiers: { [key in PersonName$FieldModifier]: FieldModifierImpl };
    format(arg0: PersonName): string;
    isLiteral(): boolean;
    isPopulated(arg0: PersonName): boolean;
    toString(): string;
}