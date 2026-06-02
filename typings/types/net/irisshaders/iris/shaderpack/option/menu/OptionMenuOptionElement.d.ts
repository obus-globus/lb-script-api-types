import type { ShaderPackOptions } from '../../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { OptionMenuContainer } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
import type { ShaderProperties } from '../../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export abstract class OptionMenuOptionElement extends OptionMenuElement {
    static EMPTY: OptionMenuElement;
    static create(paramarg0: string, paramarg1: OptionMenuContainer, paramarg2: ShaderProperties, paramarg3: ShaderPackOptions): OptionMenuElement;
    constructor(arg0: string, arg1: OptionMenuContainer, arg2: ShaderProperties, arg3: OptionValues)
    container: OptionMenuContainer;
    optionId: string;
    // private packAppliedValues: OptionValues;
    slider: boolean;
    getAppliedOptionValues(): OptionValues;
    getPendingOptionValues(): OptionValues;
}