import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MouseRotationEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MouseRotationEvent.d.ts'
import type { PerspectiveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PerspectiveEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFreeLook$PerspectiveChoice } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleFreeLook$PerspectiveChoice.d.ts'
export class ModuleFreeLook extends ClientModule {
    static INSTANCE: ModuleFreeLook;
    cameraPitch: number;
    cameraYaw: number;
    // private handlePerspective: EventHook<PerspectiveEvent>;
    readonly invertedView: boolean;
    // private mouseRotationInputHandler: EventHook<MouseRotationEvent>;
    // private noPitchLimit: boolean;
    // private /*not mapped: */ getNoPitchLimit(): boolean;
    // private perspective: ModuleFreeLook$PerspectiveChoice;
    // private /*not mapped: */ getPerspective(): ModuleFreeLook$PerspectiveChoice;
    // private senseBoost: number;
    // private /*not mapped: */ getSenseBoost(): number;
    onEnabled(): void;
}