import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ContentEncoder } from '../../../../io/ktor/util/ContentEncoder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class CompressedContentKt extends Object {
    static compressed(self: OutgoingContent, contentEncoder: ContentEncoder, coroutineContext: CoroutineContext): OutgoingContent | null;
}