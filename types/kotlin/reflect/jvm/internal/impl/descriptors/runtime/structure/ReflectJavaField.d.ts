import type { Field } from '../../../../../../../../java/lang/reflect/Field.d.ts'
import type { ReflectJavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaMember.d.ts'
import type { ReflectJavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType.d.ts'
import type { JavaField } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
export class ReflectJavaField extends ReflectJavaMember implements JavaField {
    constructor(arg0: Field)
    readonly member: Field;
    getHasConstantNotNullInitializer(): boolean;
    getMember(): Field;
    getType(): ReflectJavaType;
    isEnumEntry(): boolean;
}