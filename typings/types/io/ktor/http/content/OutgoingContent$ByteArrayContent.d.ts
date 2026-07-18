import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
export abstract class OutgoingContent$ByteArrayContent extends OutgoingContent {
    constructor()
    bytes(): number[];
}