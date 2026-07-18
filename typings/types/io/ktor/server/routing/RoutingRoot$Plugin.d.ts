import type { EventDefinition } from '../../../../io/ktor/events/EventDefinition.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { BaseApplicationPlugin } from '../../../../io/ktor/server/application/BaseApplicationPlugin.d.ts'
import type { Routing } from '../../../../io/ktor/server/routing/Routing.d.ts'
import type { RoutingCall } from '../../../../io/ktor/server/routing/RoutingCall.d.ts'
import type { RoutingRoot } from '../../../../io/ktor/server/routing/RoutingRoot.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingRoot$Plugin extends Object implements BaseApplicationPlugin<Application, Routing, RoutingRoot> {
    // private RoutingCallFinished: EventDefinition<RoutingCall>;
    /*not mapped: */ getRoutingCallFinished(): EventDefinition<RoutingCall>;
    // private RoutingCallStarted: EventDefinition<RoutingCall>;
    /*not mapped: */ getRoutingCallStarted(): EventDefinition<RoutingCall>;
    readonly key: AttributeKey<RoutingRoot>;
    install(pipeline: Application, configure: (param0: Routing) => void): RoutingRoot;
}