import type { Config } from '../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { Value } from '../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
export class LiquidBounce$Client extends Config {
    static INSTANCE: LiquidBounce$Client;
    readonly branch: Value<string>;
    readonly commit: Value<string>;
    readonly version: Value<string>;
}