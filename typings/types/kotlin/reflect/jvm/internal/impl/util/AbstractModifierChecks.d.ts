import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { CheckResult } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/CheckResult.d.ts'
import type { Checks } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/Checks.d.ts'
export abstract class AbstractModifierChecks extends Object {
    constructor()
    check(arg0: FunctionDescriptor): CheckResult;
    getChecks$org_jetbrains_kotlin_descriptors(): Checks[];
}