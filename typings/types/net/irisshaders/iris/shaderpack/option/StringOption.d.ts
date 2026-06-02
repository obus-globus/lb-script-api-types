import type { BaseOption } from '../../../../../net/irisshaders/iris/shaderpack/option/BaseOption.d.ts'
import type { OptionType } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionType.d.ts'
export class StringOption extends BaseOption {
    static create(paramarg0: OptionType, paramarg1: string, paramarg2: string, paramarg3: string): StringOption;
    private constructor(arg0: OptionType, arg1: string, arg2: string)
    private constructor(arg0: OptionType, arg1: string, arg2: string, arg3: string, arg4: string[])
    readonly allowedValues: string[];
    readonly defaultValue: string;
    getAllowedValues(): string[];
    getDefaultValue(): string;
}