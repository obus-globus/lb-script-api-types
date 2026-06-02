import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export interface PublicSuffixList extends Object{
    readonly bytes: ByteString;
    readonly exceptionBytes: ByteString;
    ensureLoaded(): void;
}