import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AssignableField } from '../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
export class NamedUnsignedIntFieldFormatDirective$AssignableString extends Object implements AssignableField<Target, string> {
    constructor(null_: NamedUnsignedIntFieldFormatDirective$AssignableString)
    readonly name: string;
    trySetWithoutReassigning<Target extends Object | number | string | boolean>(container: Target, newValue: string): string | null;
}