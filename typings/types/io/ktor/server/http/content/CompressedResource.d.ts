import type { OutgoingContent$ReadChannelContent } from '../../../../../io/ktor/http/content/OutgoingContent$ReadChannelContent.d.ts'
import type { CompressedFileType } from '../../../../../io/ktor/server/http/content/CompressedFileType.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompressedResource extends Object {
    constructor(url: URL, content: OutgoingContent$ReadChannelContent, compression: CompressedFileType)
    readonly compression: CompressedFileType;
    readonly content: OutgoingContent$ReadChannelContent;
    readonly url: URL;
}