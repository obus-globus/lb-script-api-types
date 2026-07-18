import type { CacheControl$Visibility } from '../../../io/ktor/http/CacheControl$Visibility.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class CacheControl extends Object {
    constructor(visibility: CacheControl$Visibility | null)
    readonly visibility: CacheControl$Visibility | null;
}