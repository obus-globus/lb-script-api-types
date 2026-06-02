import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BooleanOption } from '../../../../../net/irisshaders/iris/shaderpack/option/BooleanOption.d.ts'
import type { OptionLocation } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionLocation.d.ts'
export class MergedBooleanOption extends Object {
    constructor(arg0: BooleanOption, arg1: OptionLocation[])
    constructor(arg0: OptionLocation, arg1: BooleanOption)
    readonly locations: OptionLocation[];
    readonly option: BooleanOption;
    getLocations(): OptionLocation[];
    getOption(): BooleanOption;
    merge(arg0: MergedBooleanOption): MergedBooleanOption;
}