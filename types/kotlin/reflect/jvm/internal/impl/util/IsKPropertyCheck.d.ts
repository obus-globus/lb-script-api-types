import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { Check } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/Check.d.ts'
export class IsKPropertyCheck extends Object implements Check {
    static INSTANCE: IsKPropertyCheck;
    private constructor()
    check(arg0: FunctionDescriptor): boolean;
    getDescription(): string;
    invoke(arg0: FunctionDescriptor): string;
}