import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StatusPagesConfig$StatusContext extends Object {
    constructor(call: ApplicationCall, content: OutgoingContent)
    readonly call: ApplicationCall;
    readonly content: OutgoingContent;
}