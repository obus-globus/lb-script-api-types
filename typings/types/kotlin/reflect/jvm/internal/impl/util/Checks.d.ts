import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { Check } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/Check.d.ts'
import type { CheckResult } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/CheckResult.d.ts'
import type { Regex } from '../../../../../../kotlin/text/Regex.d.ts'
export class Checks extends Object {
    constructor(arg0: Name[], arg1: Check[], arg2: (param0: FunctionDescriptor) => string)
    constructor(arg0: Name, arg1: Check[], arg2: (param0: FunctionDescriptor) => string)
    private constructor(arg0: Name, arg1: Regex, arg2: Name[], arg3: (param0: FunctionDescriptor) => string, arg4: Check[])
    constructor(arg0: Regex, arg1: Check[], arg2: (param0: FunctionDescriptor) => string)
    // private additionalCheck: (param0: FunctionDescriptor) => string;
    // private checks: Check[];
    // private name: Name;
    // private nameList: Name[];
    // private regex: Regex;
    checkAll(arg0: FunctionDescriptor): CheckResult;
    isApplicable(arg0: FunctionDescriptor): boolean;
}