import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
export abstract class AbstractFieldSpec<Target extends Object | number | string | boolean, Type extends Object | number | string | boolean> extends Object implements FieldSpec<Target, Type> {
    constructor()
    toString(): string;
}