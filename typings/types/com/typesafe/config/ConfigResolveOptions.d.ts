import type { ConfigResolver } from '../../../com/typesafe/config/ConfigResolver.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConfigResolveOptions extends Object {
    static defaults(): ConfigResolveOptions;
    static noSystem(): ConfigResolveOptions;
    private constructor(arg0: boolean, arg1: boolean, arg2: ConfigResolver)
    readonly allowUnresolved: boolean;
    readonly resolver: ConfigResolver;
    readonly useSystemEnvironment: boolean;
    appendResolver(arg0: ConfigResolver): ConfigResolveOptions;
    getAllowUnresolved(): boolean;
    getResolver(): ConfigResolver;
    getUseSystemEnvironment(): boolean;
    setAllowUnresolved(arg0: boolean): ConfigResolveOptions;
    setUseSystemEnvironment(arg0: boolean): ConfigResolveOptions;
}