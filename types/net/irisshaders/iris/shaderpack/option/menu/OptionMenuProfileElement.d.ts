import type { OptionSet } from '../../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { ProfileSet } from '../../../../../../net/irisshaders/iris/shaderpack/option/ProfileSet.d.ts'
import type { ShaderPackOptions } from '../../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { OptionMenuContainer } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
import type { ShaderProperties } from '../../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export class OptionMenuProfileElement extends OptionMenuElement {
    static EMPTY: OptionMenuElement;
    static create(paramarg0: string, paramarg1: OptionMenuContainer, paramarg2: ShaderProperties, paramarg3: ShaderPackOptions): OptionMenuElement;
    constructor(arg0: ProfileSet, arg1: OptionSet, arg2: OptionValues)
    options: OptionSet;
    // private packAppliedValues: OptionValues;
    profiles: ProfileSet;
    getPendingOptionValues(): OptionValues;
}