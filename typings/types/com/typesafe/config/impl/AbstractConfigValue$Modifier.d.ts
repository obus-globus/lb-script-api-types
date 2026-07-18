import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AbstractConfigValue$Modifier extends Object{
    modifyChildMayThrow(arg0: string, arg1: AbstractConfigValue): AbstractConfigValue;
}