import type { CacheControl } from '../../../io/ktor/http/CacheControl.d.ts'
import type { CacheControl$Visibility } from '../../../io/ktor/http/CacheControl$Visibility.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CacheControl$MaxAge extends CacheControl {
    constructor(maxAgeSeconds: number, proxyMaxAgeSeconds: number | null, mustRevalidate: boolean, proxyRevalidate: boolean, visibility: CacheControl$Visibility | null)
    readonly maxAgeSeconds: number;
    readonly mustRevalidate: boolean;
    readonly proxyMaxAgeSeconds: number | null;
    readonly proxyRevalidate: boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}