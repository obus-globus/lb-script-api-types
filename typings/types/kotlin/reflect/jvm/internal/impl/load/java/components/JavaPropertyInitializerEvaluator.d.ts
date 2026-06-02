import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { JavaField } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
import type { ConstantValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
export interface JavaPropertyInitializerEvaluator extends Object{
    getInitializerConstant(arg0: JavaField, arg1: PropertyDescriptor): ConstantValue<Object>;
}