import type { ConfigValue } from '../../../com/typesafe/config/ConfigValue.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigResolver extends Object{
    lookup(arg0: string): ConfigValue;
    withFallback(arg0: ConfigResolver): ConfigResolver;
}