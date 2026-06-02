import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MergedBooleanOption } from '../../../../../net/irisshaders/iris/shaderpack/option/MergedBooleanOption.d.ts'
import type { MergedStringOption } from '../../../../../net/irisshaders/iris/shaderpack/option/MergedStringOption.d.ts'
import type { OptionSet$Builder } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionSet$Builder.d.ts'
export class OptionSet extends Object {
    static builder(): OptionSet$Builder;
    private constructor(arg0: OptionSet$Builder)
    readonly booleanOptions: { [key: string]: MergedBooleanOption };
    readonly stringOptions: { [key: string]: MergedStringOption };
    getBooleanOptions(): { [key: string]: MergedBooleanOption };
    getStringOptions(): { [key: string]: MergedStringOption };
    isBooleanOption(arg0: string): boolean;
}