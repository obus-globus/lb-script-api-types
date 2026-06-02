import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NoFallPacket$FallDistance$DistanceMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallPacket$FallDistance$DistanceMode.d.ts'
import type { NoFallPacket$Filter } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallPacket$Filter.d.ts'
export class NoFallPacket$FallDistance extends NoFallPacket$Filter {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallPacket$FallDistance;
    // private distance: ModeValueGroup<NoFallPacket$FallDistance$DistanceMode>;
    /*not mapped: */ isActive(): boolean;
    readonly resetFallDistance: boolean;
}