import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionType } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionType.d.ts'
export abstract class BaseOption extends Object {
    constructor(arg0: OptionType, arg1: string, arg2: string)
    readonly comment: string;
    readonly name: string;
    readonly type: OptionType;
    getComment(): Optional<string>;
    getName(): string;
    getType(): OptionType;
}