import type { ConfigException$Parse } from '../../../com/typesafe/config/ConfigException$Parse.d.ts'
import type { ConfigOrigin } from '../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ConfigException$UnresolvedSubstitution extends ConfigException$Parse {
    constructor(arg0: ConfigOrigin, arg1: string)
    constructor(arg0: ConfigOrigin, arg1: string, arg2: Throwable)
    // private detail: string;
    addExtraDetail(arg0: string): ConfigException$UnresolvedSubstitution;
}