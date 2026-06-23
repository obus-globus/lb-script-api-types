import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AssignableField } from '../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
export interface Accessor<Object extends unknown, Field extends unknown> extends Object, AssignableField<Object, Field>{
    getter(container: Object): Field | null;
    getterNotNull(container: Object): Field;
}