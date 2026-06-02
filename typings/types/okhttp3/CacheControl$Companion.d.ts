import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { CacheControl } from '../okhttp3/CacheControl.d.ts'
export class CacheControl$Companion extends Object {
    FORCE_CACHE: CacheControl;
    FORCE_NETWORK: CacheControl;
    parse(headers: Pair<string, string>[]): CacheControl;
}