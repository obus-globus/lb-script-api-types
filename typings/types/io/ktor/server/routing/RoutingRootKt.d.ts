import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { Routing } from '../../../../io/ktor/server/routing/Routing.d.ts'
import type { RoutingCall } from '../../../../io/ktor/server/routing/RoutingCall.d.ts'
import type { RoutingRoot } from '../../../../io/ktor/server/routing/RoutingRoot.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class RoutingRootKt extends Object {
    static getApplication(paramarg0: Route): Application;
    static getLOGGER(): Logger;
    static getRoutingCallKey(): AttributeKey<RoutingCall>;
    static getRoutingFailureStatusCode(): AttributeKey<HttpStatusCode>;
    static routing(self: Application, configuration: (param0: Routing) => void): RoutingRoot;
}