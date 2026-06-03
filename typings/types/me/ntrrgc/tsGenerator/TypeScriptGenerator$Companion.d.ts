import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { KProperty } from '../../../kotlin/reflect/KProperty.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { Regex } from '../../../kotlin/text/Regex.d.ts'
export class TypeScriptGenerator$Companion extends Object {
    // private FUNCTION_CLASS_NAME: Regex;
    // private KotlinAnyOrNull: KType;
    // private KotlinNotNull: KType;
    // private MIXIN_COUNTER_REGEX: Regex;
    // private SYNTHETIC_MEMBER_REGEX: Regex;
    isJavaBeanProperty(kProperty: KProperty<Object>, klass: KClass<Object>): boolean;
    // private overloadSignature(f: KFunction<Object>): string;
}