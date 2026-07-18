import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultTransformKt extends Object {
    static transformDefaultContent(call: ApplicationCall, value: Object): OutgoingContent | null;
}