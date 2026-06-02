import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Easing } from '../../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
import type { WireframePlayer } from '../../../../../../../net/ccbluex/liquidbounce/utils/render/WireframePlayer.d.ts'
export class ModuleFlagCheck$Render extends ToggleableValueGroup {
    static INSTANCE: ModuleFlagCheck$Render;
    // private color: Color4b;
    // private /*not mapped: */ getColor(): Color4b;
    creationTime: number;
    // private fadeOut: Easing;
    // private /*not mapped: */ getFadeOut(): Easing;
    finished: boolean;
    // private notInFirstPerson: boolean;
    // private /*not mapped: */ getNotInFirstPerson(): boolean;
    // private outTime: number;
    // private /*not mapped: */ getOutTime(): number;
    // private outlineColor: Color4b;
    // private /*not mapped: */ getOutlineColor(): Color4b;
    readonly renderHandler: EventHook<WorldRenderEvent>;
    // private renderTime: number;
    // private /*not mapped: */ getRenderTime(): number;
    readonly wireframePlayer: WireframePlayer;
    onEnabled(): void;
    reset(): void;
}