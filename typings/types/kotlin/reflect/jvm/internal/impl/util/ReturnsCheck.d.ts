import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { Check } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/Check.d.ts'
export abstract class ReturnsCheck extends Object implements Check {
    private constructor(arg0: string, arg1: (param0: KotlinBuiltIns) => KotlinType)
    constructor(arg0: string, arg1: (param0: Object | null) => Object | null, arg2: DefaultConstructorMarker)
    readonly description: string;
    // private name: string;
    // private type: (param0: KotlinBuiltIns) => KotlinType;
    check(arg0: FunctionDescriptor): boolean;
    getDescription(): string;
    invoke(arg0: FunctionDescriptor): string;
}