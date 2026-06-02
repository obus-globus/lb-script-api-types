import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyboardKeyEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { PerspectiveEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PerspectiveEvent.d.ts'
import type { ScrollAdjustValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ScrollAdjustValueGroup.d.ts'
export class ModuleCameraClip$ScrollAdjust extends ScrollAdjustValueGroup {
    static INSTANCE: ModuleCameraClip$ScrollAdjust;
    // private releaseModifierHandler: EventHook<KeyboardKeyEvent>;
    // private rememberScrolled: boolean;
    // private /*not mapped: */ getRememberScrolled(): boolean;
    // private requireFreeLook: boolean;
    // private /*not mapped: */ getRequireFreeLook(): boolean;
    // private resetHandler: EventHook<PerspectiveEvent>;
    readonly scrolledDistance: number;
    canPerformScroll(): boolean;
    onEnabled(): void;
    reset(): void;
}