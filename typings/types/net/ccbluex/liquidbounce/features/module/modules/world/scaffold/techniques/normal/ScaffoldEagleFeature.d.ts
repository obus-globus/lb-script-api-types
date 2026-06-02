import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { RefreshableIntState } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/utils/RefreshableIntState.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { DirectionalInput } from '../../../../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
export class ScaffoldEagleFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldEagleFeature;
    // private blocksToEagle: RefreshableIntState;
    // private edgeDistance: number;
    // private /*not mapped: */ getEdgeDistance(): number;
    // private onlyOnGround: boolean;
    // private /*not mapped: */ getOnlyOnGround(): boolean;
    // private placedBlocks: number;
    // private stateUpdateHandler: EventHook<MovementInputEvent>;
    onBlockPlacement(): void;
    shouldEagle(input: DirectionalInput): boolean;
}