import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Accessor } from '../../../../kotlinx/datetime/internal/format/Accessor.d.ts'
import type { FieldSign } from '../../../../kotlinx/datetime/internal/format/FieldSign.d.ts'
export interface FieldSpec<Target extends Object | number | string | boolean, Type extends Object | number | string | boolean> extends Object{
    readonly accessor: Accessor<Target, Type>;
    readonly defaultValue: Type | null;
    readonly name: string;
    readonly sign: FieldSign<Target> | null;
}