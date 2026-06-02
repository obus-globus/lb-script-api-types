import type { InputConstants$Key } from '../../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { FloatConsumer } from '../../../../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MouseScrollEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MouseScrollEvent.d.ts'
import type { MouseScrollInHotbarEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MouseScrollInHotbarEvent.d.ts'
import type { ScrollAdjustOptions } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ScrollAdjustOptions.d.ts'
export class ScrollAdjustValueGroup extends ToggleableValueGroup {
    constructor(parent: EventListener | null, name: string, enabled: boolean, adjustFunction: (param0: number) => void, options: ScrollAdjustOptions)
    // private adjustFunction: (param0: number) => void;
    readonly modifierKey: InputConstants$Key;
    // private mouseScrollHandler: EventHook<MouseScrollEvent>;
    // private scrollInHotbarHandler: EventHook<MouseScrollInHotbarEvent>;
    readonly sensitivity: number;
    canPerformScroll(): boolean;
}