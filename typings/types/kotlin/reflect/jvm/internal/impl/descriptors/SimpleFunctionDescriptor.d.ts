import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { FunctionDescriptor$CopyBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor$CopyBuilder.d.ts'
export interface SimpleFunctionDescriptor extends Object, FunctionDescriptor{
    newCopyBuilder(): FunctionDescriptor$CopyBuilder<SimpleFunctionDescriptor>;
}