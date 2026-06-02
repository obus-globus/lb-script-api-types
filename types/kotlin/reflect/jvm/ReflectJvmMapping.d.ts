import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { KMutableProperty } from '../../../kotlin/reflect/KMutableProperty.d.ts'
import type { KProperty } from '../../../kotlin/reflect/KProperty.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export class ReflectJvmMapping extends Object {
    static getJavaConstructor(paramarg0: KFunction<Object>): Constructor<Object>;
    static getJavaField(paramarg0: KProperty<Object>): Field;
    static getJavaGetter(paramarg0: KProperty<Object>): Method;
    static getJavaMethod(paramarg0: KFunction<Object>): Method;
    static getJavaSetter(paramarg0: KMutableProperty<Object>): Method;
    static getJavaType(paramarg0: KType): Type;
    static getKotlinFunction(paramarg0: Constructor<Object>): KFunction<Object>;
    static getKotlinFunction(paramarg0: Method): KFunction<Object>;
    static getKotlinProperty(paramarg0: Field): KProperty<Object>;
}