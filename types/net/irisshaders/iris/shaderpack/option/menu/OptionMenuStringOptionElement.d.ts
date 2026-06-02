import type { ShaderPackOptions } from '../../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { StringOption } from '../../../../../../net/irisshaders/iris/shaderpack/option/StringOption.d.ts'
import type { OptionMenuContainer } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionMenuOptionElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuOptionElement.d.ts'
import type { OptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
import type { ShaderProperties } from '../../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export class OptionMenuStringOptionElement extends OptionMenuOptionElement {
    static EMPTY: OptionMenuElement;
    static create(paramarg0: string, paramarg1: OptionMenuContainer, paramarg2: ShaderProperties, paramarg3: ShaderPackOptions): OptionMenuElement;
    constructor(arg0: string, arg1: OptionMenuContainer, arg2: ShaderProperties, arg3: OptionValues, arg4: StringOption)
    option: StringOption;
}