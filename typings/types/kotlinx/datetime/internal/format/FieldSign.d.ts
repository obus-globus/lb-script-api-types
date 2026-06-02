import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Accessor } from '../../../../kotlinx/datetime/internal/format/Accessor.d.ts'
export interface FieldSign<Target extends Object | number | string | boolean> extends Object{
    /*not mapped: */ isNegative(): Accessor<Target, boolean>;
    isZero(obj: Target): boolean;
}