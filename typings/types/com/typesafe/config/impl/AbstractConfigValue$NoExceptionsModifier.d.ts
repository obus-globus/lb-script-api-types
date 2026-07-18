import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { AbstractConfigValue$Modifier } from '../../../../com/typesafe/config/impl/AbstractConfigValue$Modifier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractConfigValue$NoExceptionsModifier extends Object implements AbstractConfigValue$Modifier {
    constructor(null_: AbstractConfigValue)
    modifyChild(arg0: string, arg1: AbstractConfigValue): AbstractConfigValue;
    modifyChildMayThrow(arg0: string, arg1: AbstractConfigValue): AbstractConfigValue;
}