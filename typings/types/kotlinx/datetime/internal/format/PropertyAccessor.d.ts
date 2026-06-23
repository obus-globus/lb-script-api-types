import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty1 } from '../../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { Accessor } from '../../../../kotlinx/datetime/internal/format/Accessor.d.ts'
export class PropertyAccessor<Object extends unknown, Field extends unknown> extends Object implements Accessor<Object, Field> {
    constructor(property: KMutableProperty1<Object, Field>, name: string)
    readonly name: string;
    // private property: KMutableProperty1<Object, Field>;
    getter(container: Object): Field | null;
    getterNotNull(container: Object): Field;
    trySetWithoutReassigning(container: Object, newValue: Field): Field | null;
}