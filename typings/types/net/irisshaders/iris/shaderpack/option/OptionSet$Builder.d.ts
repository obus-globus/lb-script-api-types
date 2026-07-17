import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BooleanOption } from '../../../../../net/irisshaders/iris/shaderpack/option/BooleanOption.d.ts'
import type { MergedBooleanOption } from '../../../../../net/irisshaders/iris/shaderpack/option/MergedBooleanOption.d.ts'
import type { MergedStringOption } from '../../../../../net/irisshaders/iris/shaderpack/option/MergedStringOption.d.ts'
import type { OptionLocation } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionLocation.d.ts'
import type { OptionSet } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { StringOption } from '../../../../../net/irisshaders/iris/shaderpack/option/StringOption.d.ts'
export class OptionSet$Builder extends Object {
    constructor()
    // private booleanOptions: JavaMap<string, MergedBooleanOption>;
    // private stringOptions: JavaMap<string, MergedStringOption>;
    addAll(arg0: OptionSet): void;
    addBooleanOption(arg0: MergedBooleanOption): void;
    addBooleanOption(arg0: OptionLocation, arg1: BooleanOption): void;
    addStringOption(arg0: MergedStringOption): void;
    addStringOption(arg0: OptionLocation, arg1: StringOption): void;
    build(): OptionSet;
}