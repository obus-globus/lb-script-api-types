import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { HatsMode$EquipOffset } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode$EquipOffset.d.ts'
import type { HatsMode$FriendsOptions } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode$FriendsOptions.d.ts'
/**
 * @author minecrrrr
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode.kt:51}
 */
export abstract class HatsMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    // private equipOffset: HatsMode$EquipOffset;
    // private followRotation: boolean;
    // private /*not mapped: */ getFollowRotation(): boolean;
    // private friendsOptions: HatsMode$FriendsOptions;
    // private hurtMarked: boolean;
    // private /*not mapped: */ getHurtMarked(): boolean;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private showInFirstPerson: boolean;
    // private /*not mapped: */ getShowInFirstPerson(): boolean;
    protected getAngle(i: number, segments: number): number;
    protected getNextAngle(i: number, segments: number): number;
    protected getRotationAngle(speed: number): number;
}