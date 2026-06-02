import type { Object } from '../../../java/lang/Object.d.ts'
import type { PublicSuffixDatabase } from '../../../okhttp3/internal/publicsuffix/PublicSuffixDatabase.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class PublicSuffixDatabase$Companion extends Object {
    // private EXCEPTION_MARKER: string;
    // private PREVAILING_RULE: string[];
    // private WILDCARD_LABEL: ByteString;
    // private instance: PublicSuffixDatabase;
    get(): PublicSuffixDatabase;
    resetForTests(): void;
}