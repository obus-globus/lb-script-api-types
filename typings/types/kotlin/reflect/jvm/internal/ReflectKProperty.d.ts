import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KotlinGenericDeclaration } from '../../../../kotlin/jvm/internal/KotlinGenericDeclaration.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KProperty } from '../../../../kotlin/reflect/KProperty.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export interface ReflectKProperty<V extends unknown> extends Object, KotlinGenericDeclaration, KProperty<V>, ReflectKCallable<V>{
    readonly javaField: Field | null;
    readonly signature: string;
    call(...args: (Object | null)[]): V;
    callBy(args: Map<KParameter, Object | null>): V;
    findJavaDeclaration(): GenericDeclaration | null;
}