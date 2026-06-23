import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
export abstract class AbstractFieldSpec<Target extends unknown, Type extends unknown> extends Object implements FieldSpec<Target, Type> {
    constructor()
    toString(): string;
}