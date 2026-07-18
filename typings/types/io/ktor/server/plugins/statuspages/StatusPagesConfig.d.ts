import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { HttpStatusCode } from '../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { StatusPagesConfig$StatusContext } from '../../../../../io/ktor/server/plugins/statuspages/StatusPagesConfig$StatusContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export class StatusPagesConfig extends Object {
    constructor()
    readonly exceptions: JavaMap<KClass<Object>, (param0: ApplicationCall, param1: Throwable) => void>;
    readonly statuses: JavaMap<HttpStatusCode, (param0: ApplicationCall, param1: OutgoingContent, param2: HttpStatusCode) => void>;
    // private unhandled: (param0: ApplicationCall) => void;
    /*not mapped: */ getUnhandled$ktor_server_status_pages(): (param0: ApplicationCall) => void;
    exception<T extends Throwable>(klass: KClass<T>, handler: (param0: ApplicationCall, param1: T) => void): void;
    exception<T extends Throwable>(handler: (param0: ApplicationCall, param1: T) => void): void;
    status(status: HttpStatusCode[], handler: (param0: ApplicationCall, param1: HttpStatusCode) => void): void;
    status(status: HttpStatusCode[], handler: (param0: StatusPagesConfig$StatusContext, param1: HttpStatusCode) => void): void;
    unhandled(handler: (param0: ApplicationCall) => void): void;
}