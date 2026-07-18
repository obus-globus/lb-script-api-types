import type { CacheControl } from '../../../io/ktor/http/CacheControl.d.ts'
import type { CacheControl$Visibility } from '../../../io/ktor/http/CacheControl$Visibility.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CacheControl$NoCache extends CacheControl {
    constructor(visibility: CacheControl$Visibility | null)
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}