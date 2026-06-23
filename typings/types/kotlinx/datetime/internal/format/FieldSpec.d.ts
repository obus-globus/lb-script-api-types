import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Accessor } from '../../../../kotlinx/datetime/internal/format/Accessor.d.ts'
import type { FieldSign } from '../../../../kotlinx/datetime/internal/format/FieldSign.d.ts'
export interface FieldSpec<Target extends unknown, Type extends unknown> extends Object{
    readonly accessor: Accessor<Target, Type>;
    readonly defaultValue: Type | null;
    readonly name: string;
    readonly sign: FieldSign<Target> | null;
}