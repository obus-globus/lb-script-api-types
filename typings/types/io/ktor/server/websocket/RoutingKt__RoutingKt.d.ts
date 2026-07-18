import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingKt__RoutingKt extends Object {
    static webSocket(paramarg0: Route, paramarg1: string, paramarg2: string, paramarg3: (param0: Object, param1: Object) => Object): Route;
    static webSocket(paramarg0: Route, paramarg1: string, paramarg2: (param0: Object, param1: Object) => Object): Route;
    static webSocketRaw(paramarg0: Route, paramarg1: string, paramarg2: boolean, paramarg3: (param0: Object, param1: Object) => Object): Route;
    static webSocketRaw(paramarg0: Route, paramarg1: string, paramarg2: string, paramarg3: boolean, paramarg4: (param0: Object, param1: Object) => Object): Route;
    static webSocketRaw(paramarg0: Route, paramarg1: string, paramarg2: string, paramarg3: (param0: Object, param1: Object) => Object): Route;
    static webSocketRaw(paramarg0: Route, paramarg1: string, paramarg2: (param0: Object, param1: Object) => Object): Route;
}