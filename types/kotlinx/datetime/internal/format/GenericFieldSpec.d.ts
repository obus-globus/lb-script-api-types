import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractFieldSpec } from '../../../../kotlinx/datetime/internal/format/AbstractFieldSpec.d.ts'
import type { Accessor } from '../../../../kotlinx/datetime/internal/format/Accessor.d.ts'
import type { FieldSign } from '../../../../kotlinx/datetime/internal/format/FieldSign.d.ts'
export class GenericFieldSpec<Target extends Object | number | string | boolean, Type extends Object | number | string | boolean> extends AbstractFieldSpec<Target, Type> {
    constructor(accessor: Accessor<Target, Type>, name: string, defaultValue: Type | null, sign: FieldSign<Target> | null)
    readonly accessor: Accessor<Target, Type>;
    readonly defaultValue: Type | null;
    readonly name: string;
    readonly sign: FieldSign<Target> | null;
}