import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AssignableField } from '../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
export interface Accessor<Object extends Object | number | string | boolean, Field extends Object | number | string | boolean> extends Object, AssignableField<Object, Field>{
    getter(container: Object): Field | null;
    getterNotNull(container: Object): Field;
}