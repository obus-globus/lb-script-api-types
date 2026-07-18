import type { ConfigException$Missing } from '../../../com/typesafe/config/ConfigException$Missing.d.ts'
import type { ConfigOrigin } from '../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ConfigException$Null extends ConfigException$Missing {
    constructor(arg0: ConfigOrigin, arg1: string, arg2: string)
    constructor(arg0: ConfigOrigin, arg1: string, arg2: string, arg3: Throwable)
}