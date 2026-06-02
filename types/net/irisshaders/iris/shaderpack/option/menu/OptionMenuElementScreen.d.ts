import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ShaderPackOptions } from '../../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { OptionMenuContainer } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { ShaderProperties } from '../../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export class OptionMenuElementScreen extends Object {
    constructor(arg0: OptionMenuContainer, arg1: ShaderProperties, arg2: ShaderPackOptions, arg3: string[], arg4: Optional<number>)
    readonly columnCount: Optional<number>;
    elements: OptionMenuElement[];
    getColumnCount(): number;
}