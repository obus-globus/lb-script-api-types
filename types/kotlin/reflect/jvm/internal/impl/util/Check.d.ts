import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
export interface Check extends Object{
    check(arg0: FunctionDescriptor): boolean;
    getDescription(): string;
    invoke(arg0: FunctionDescriptor): string;
}