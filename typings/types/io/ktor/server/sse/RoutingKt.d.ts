import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { ServerSSESession } from '../../../../io/ktor/server/sse/ServerSSESession.d.ts'
import type { ServerSSESessionWithSerialization } from '../../../../io/ktor/server/sse/ServerSSESessionWithSerialization.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingKt extends Object {
    static sse(self: Route, path: string, handler: (param0: ServerSSESession) => void): Route;
    static sse(self: Route, path: string, serialize: (param0: TypeInfo, param1: Object) => string, handler: (param0: ServerSSESessionWithSerialization) => void): Route;
    static sse(self: Route, handler: (param0: ServerSSESession) => void): Route;
    static sse(self: Route, serialize: (param0: TypeInfo, param1: Object) => string, handler: (param0: ServerSSESessionWithSerialization) => void): Route;
}