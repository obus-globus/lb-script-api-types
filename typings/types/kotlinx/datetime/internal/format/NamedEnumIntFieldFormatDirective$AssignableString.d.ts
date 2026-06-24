import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NamedEnumIntFieldFormatDirective } from '../../../../kotlinx/datetime/internal/format/NamedEnumIntFieldFormatDirective.d.ts'
import type { AssignableField } from '../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
export class NamedEnumIntFieldFormatDirective$AssignableString extends Object implements AssignableField<Target, string> {
    constructor(null_: NamedEnumIntFieldFormatDirective<Target, Type>)
    readonly name: string;
    trySetWithoutReassigning<Target extends unknown>(container: Target, newValue: string): string | null;
}