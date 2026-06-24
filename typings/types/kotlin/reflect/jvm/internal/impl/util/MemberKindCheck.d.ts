import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { Check } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/Check.d.ts'
export abstract class MemberKindCheck extends Object implements Check {
    private constructor(arg0: string)
    constructor(arg0: string, arg1: DefaultConstructorMarker)
    readonly description: string;
    check(arg0: FunctionDescriptor): boolean;
    getDescription(): string;
    invoke(arg0: FunctionDescriptor): string;
}