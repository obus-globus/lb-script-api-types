import type { EventDefinition } from '../../../../io/ktor/events/EventDefinition.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultApplicationEventsKt extends Object {
    static getApplicationModulesLoaded(): EventDefinition<Application>;
    static getApplicationModulesLoading(): EventDefinition<Application>;
    static getApplicationStarted(): EventDefinition<Application>;
    static getApplicationStarting(): EventDefinition<Application>;
    static getApplicationStopPreparing(): EventDefinition<ApplicationEnvironment>;
    static getApplicationStopped(): EventDefinition<Application>;
    static getApplicationStopping(): EventDefinition<Application>;
    static getServerReady(): EventDefinition<ApplicationEnvironment>;
}