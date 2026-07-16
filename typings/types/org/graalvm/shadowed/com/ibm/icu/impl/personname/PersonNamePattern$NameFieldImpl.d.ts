import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FieldModifierImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/FieldModifierImpl.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonNamePattern$Element } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNamePattern$Element.d.ts'
import type { PersonName } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
import type { PersonName$FieldModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { PersonName$NameField } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$NameField.d.ts'
export class PersonNamePattern$NameFieldImpl extends Object implements PersonNamePattern$Element {
    constructor(fieldNameAndModifiers: string, formatterImpl: PersonNameFormatterImpl)
    // private fieldID: PersonName$NameField;
    // private modifiers: Map<PersonName$FieldModifier, FieldModifierImpl>;
    format(name: PersonName): string;
    isLiteral(): boolean;
    isPopulated(name: PersonName): boolean;
    toString(): string;
}