import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingKt__RoutingBackwardCompatibleKt extends Object {
    static webSocket(paramarg0: Route, paramarg1: string, paramarg2: string, paramarg3: (param0: Object | null, param1: Object | null) => Object | null): void;
    static webSocket(paramarg0: Route, paramarg1: string, paramarg2: (param0: Object | null, param1: Object | null) => Object | null): void;
    static webSocketRaw(paramarg0: Route, paramarg1: string, paramarg2: boolean, paramarg3: (param0: Object | null, param1: Object | null) => Object | null): void;
    static webSocketRaw(paramarg0: Route, paramarg1: string, paramarg2: string, paramarg3: boolean, paramarg4: (param0: Object | null, param1: Object | null) => Object | null): void;
    static webSocketRaw(paramarg0: Route, paramarg1: string, paramarg2: string, paramarg3: (param0: Object | null, param1: Object | null) => Object | null): void;
    static webSocketRaw(paramarg0: Route, paramarg1: string, paramarg2: (param0: Object | null, param1: Object | null) => Object | null): void;
}