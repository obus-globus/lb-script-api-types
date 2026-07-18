import type { ConfigOrigin } from '../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConfigOriginFactory extends Object {
    static newFile(paramarg0: string): ConfigOrigin;
    static newSimple(): ConfigOrigin;
    static newSimple(paramarg0: string): ConfigOrigin;
    static newURL(paramarg0: URL): ConfigOrigin;
    private constructor()
}