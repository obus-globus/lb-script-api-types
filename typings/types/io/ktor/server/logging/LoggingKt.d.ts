import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { MDCProvider } from '../../../../io/ktor/server/logging/MDCProvider.d.ts'
import type { ApplicationRequest } from '../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LoggingKt extends Object {
    static getMdcProvider(paramarg0: Application): MDCProvider;
    static toLogString(self: ApplicationRequest): string;
}