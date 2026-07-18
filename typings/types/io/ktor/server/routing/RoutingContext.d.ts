import type { RoutingCall } from '../../../../io/ktor/server/routing/RoutingCall.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingContext extends Object {
    constructor(call: RoutingCall)
    readonly call: RoutingCall;
}