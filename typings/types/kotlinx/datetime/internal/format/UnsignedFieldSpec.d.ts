import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractFieldSpec } from '../../../../kotlinx/datetime/internal/format/AbstractFieldSpec.d.ts'
import type { Accessor } from '../../../../kotlinx/datetime/internal/format/Accessor.d.ts'
import type { FieldSign } from '../../../../kotlinx/datetime/internal/format/FieldSign.d.ts'
export class UnsignedFieldSpec<Target extends Object | number | string | boolean> extends AbstractFieldSpec<Target, number> {
    constructor(accessor: Accessor<Target, number>, minValue: number, maxValue: number, name: string, defaultValue: number | null, sign: FieldSign<Target> | null)
    readonly accessor: Accessor<Target, number>;
    readonly defaultValue: number | null;
    readonly maxDigits: number;
    readonly maxValue: number;
    readonly minValue: number;
    readonly name: string;
    readonly sign: FieldSign<Target> | null;
}