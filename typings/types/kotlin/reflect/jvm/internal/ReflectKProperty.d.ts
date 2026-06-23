import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../kotlin/reflect/KProperty.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export interface ReflectKProperty<V extends unknown> extends Object, KProperty<V>, ReflectKCallable<V>{
    readonly javaField: Field | null;
    readonly signature: string;
}