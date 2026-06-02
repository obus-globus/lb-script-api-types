import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SourceInstrumentationHandler$SourcesNotification extends Object {
    private constructor()
    // private notificationsRun: AtomicBoolean;
    // private sourcesResolved: AtomicBoolean;
    resolveSources(): void;
    runNotifications(): void;
}