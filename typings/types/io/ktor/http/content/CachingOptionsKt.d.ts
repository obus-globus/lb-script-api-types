import type { CachingOptions } from '../../../../io/ktor/http/content/CachingOptions.d.ts'
import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CachingOptionsKt extends Object {
    static getCaching(paramarg0: OutgoingContent): CachingOptions;
    static getCachingProperty(): AttributeKey<CachingOptions>;
    static setCaching(paramarg0: OutgoingContent, paramarg1: CachingOptions): void;
}