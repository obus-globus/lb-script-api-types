import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationReceiveFunctionsJvmKt extends Object {
    static getDEFAULT_FORM_FIELD_LIMIT(): number;
    static receiveStream(self: ApplicationCall): InputStream;
}