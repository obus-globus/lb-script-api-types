import type { ConfigException } from '../../../com/typesafe/config/ConfigException.d.ts'
import type { ConfigOrigin } from '../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ConfigException$Missing extends ConfigException {
    constructor(arg0: ConfigOrigin, arg1: string)
    constructor(arg0: ConfigOrigin, arg1: string, arg2: Throwable)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
}