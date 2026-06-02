import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionLocation } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionLocation.d.ts'
import type { StringOption } from '../../../../../net/irisshaders/iris/shaderpack/option/StringOption.d.ts'
export class MergedStringOption extends Object {
    constructor(arg0: OptionLocation, arg1: StringOption)
    constructor(arg0: StringOption, arg1: OptionLocation[])
    readonly locations: OptionLocation[];
    readonly option: StringOption;
    getLocations(): OptionLocation[];
    getOption(): StringOption;
    merge(arg0: MergedStringOption): MergedStringOption;
}