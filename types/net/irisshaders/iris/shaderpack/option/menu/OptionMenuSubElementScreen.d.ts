import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { ShaderPackOptions } from '../../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { OptionMenuContainer } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { OptionMenuElementScreen } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElementScreen.d.ts'
import type { ShaderProperties } from '../../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export class OptionMenuSubElementScreen extends OptionMenuElementScreen {
    constructor(arg0: string, arg1: OptionMenuContainer, arg2: ShaderProperties, arg3: ShaderPackOptions, arg4: string[], arg5: Optional<number>)
    screenId: string;
}