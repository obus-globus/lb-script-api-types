import type { ContentDisposition } from '../../../../io/ktor/http/ContentDisposition.d.ts'
import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PartData extends Object {
    protected constructor(dispose: () => void, headers: Headers, release: () => void)
    readonly contentDisposition: ContentDisposition | null;
    readonly contentType: ContentType | null;
    readonly dispose: () => void;
    readonly headers: Headers;
    readonly name: string | null;
    readonly release: () => void;
}