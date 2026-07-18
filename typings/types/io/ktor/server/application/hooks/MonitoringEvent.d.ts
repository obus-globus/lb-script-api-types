import type { EventDefinition } from '../../../../../io/ktor/events/EventDefinition.d.ts'
import type { ApplicationCallPipeline } from '../../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../../io/ktor/server/application/Hook.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MonitoringEvent<Param extends unknown, Event extends EventDefinition<Param>> extends Object implements Hook<(param0: Param) => void> {
    constructor(event: Event)
    // private event: Event;
    install(pipeline: ApplicationCallPipeline, handler: (param0: Param) => void): void;
}