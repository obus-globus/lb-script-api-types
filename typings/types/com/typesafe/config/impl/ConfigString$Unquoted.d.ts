import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigString } from '../../../../com/typesafe/config/impl/ConfigString.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigString$Unquoted extends ConfigString {
    constructor(arg0: ConfigOrigin, arg1: string)
    newCopy(arg0: ConfigOrigin): ConfigString$Unquoted;
    // private writeReplace(): Object;
}