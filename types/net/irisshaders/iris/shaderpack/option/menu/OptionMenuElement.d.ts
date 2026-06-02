import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ShaderPackOptions } from '../../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { OptionMenuContainer } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { ShaderProperties } from '../../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export abstract class OptionMenuElement extends Object {
    static EMPTY: OptionMenuElement;
    static create(paramarg0: string, paramarg1: OptionMenuContainer, paramarg2: ShaderProperties, paramarg3: ShaderPackOptions): OptionMenuElement;
    constructor()
}