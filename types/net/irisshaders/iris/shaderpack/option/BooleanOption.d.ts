import type { BaseOption } from '../../../../../net/irisshaders/iris/shaderpack/option/BaseOption.d.ts'
import type { OptionType } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionType.d.ts'
export class BooleanOption extends BaseOption {
    constructor(arg0: OptionType, arg1: string, arg2: string, arg3: boolean)
    readonly defaultValue: boolean;
    getDefaultValue(): boolean;
    toString(): string;
}