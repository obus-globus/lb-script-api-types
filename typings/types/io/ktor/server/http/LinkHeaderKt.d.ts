import type { LinkHeader } from '../../../../io/ktor/http/LinkHeader.d.ts'
import type { ApplicationResponse } from '../../../../io/ktor/server/response/ApplicationResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinkHeaderKt extends Object {
    static link(self: ApplicationResponse, header: LinkHeader): void;
    static link(self: ApplicationResponse, uri: string, ...rel: string[]): void;
}