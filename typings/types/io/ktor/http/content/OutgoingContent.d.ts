import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Attributes } from '../../../../io/ktor/util/Attributes.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OutgoingContent extends Object {
    protected constructor()
    readonly contentLength: number | null;
    readonly contentType: ContentType | null;
    // private extensionProperties: Attributes | null;
    readonly headers: Headers;
    readonly status: HttpStatusCode | null;
    getProperty<T extends unknown>(key: AttributeKey<T>): T | null;
    setProperty<T extends unknown>(key: AttributeKey<T>, value: T | null): void;
    trailers(): Headers | null;
}