import type { URLBuilder } from '../../../../io/ktor/http/URLBuilder.d.ts'
import type { URLBuilder$Companion } from '../../../../io/ktor/http/URLBuilder$Companion.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class URLBuilderKt extends Object {
    static createFromCall(self: URLBuilder$Companion, call: ApplicationCall): URLBuilder;
    static url(self: ApplicationCall, block: (param0: URLBuilder) => void): string;
    static url(block: (param0: URLBuilder) => void): string;
}