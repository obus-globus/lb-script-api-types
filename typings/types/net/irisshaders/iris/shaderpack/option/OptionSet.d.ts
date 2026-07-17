import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MergedBooleanOption } from '../../../../../net/irisshaders/iris/shaderpack/option/MergedBooleanOption.d.ts'
import type { MergedStringOption } from '../../../../../net/irisshaders/iris/shaderpack/option/MergedStringOption.d.ts'
import type { OptionSet$Builder } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionSet$Builder.d.ts'
export class OptionSet extends Object {
    static builder(): OptionSet$Builder;
    private constructor(arg0: OptionSet$Builder)
    readonly booleanOptions: JavaMap<string, MergedBooleanOption>;
    readonly stringOptions: JavaMap<string, MergedStringOption>;
    getBooleanOptions(): JavaMap<string, MergedBooleanOption>;
    getStringOptions(): JavaMap<string, MergedStringOption>;
    isBooleanOption(arg0: string): boolean;
}