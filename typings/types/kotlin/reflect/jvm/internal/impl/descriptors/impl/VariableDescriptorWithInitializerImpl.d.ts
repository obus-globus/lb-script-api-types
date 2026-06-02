import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { VariableDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/VariableDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { NullableLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export abstract class VariableDescriptorWithInitializerImpl extends VariableDescriptorImpl {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeclarationDescriptor, arg1: AnnotationDescriptor[], arg2: Name, arg3: KotlinType, arg4: boolean, arg5: SourceElement)
    compileTimeInitializer: NullableLazyValue<ConstantValue<Object>>;
    compileTimeInitializerFactory: () => NullableLazyValue<ConstantValue<Object>>;
    // private isVar: boolean;
    getCompileTimeInitializer(): ConstantValue<Object>;
    isVar(): boolean;
    setCompileTimeInitializer(arg0: NullableLazyValue<ConstantValue<Object>>, arg1: Function0<NullableLazyValue<ConstantValue<Object>>>): void;
    setCompileTimeInitializerFactory(arg0: Function0<NullableLazyValue<ConstantValue<Object>>>): void;
}