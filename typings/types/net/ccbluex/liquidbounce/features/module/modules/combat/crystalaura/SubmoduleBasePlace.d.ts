import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlacementPositionCandidate } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementPositionCandidate.d.ts'
import type { BlockPlacer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * Tries to build improved placement spots.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:48}
 */
export class SubmoduleBasePlace extends ToggleableValueGroup {
    static INSTANCE: SubmoduleBasePlace;
    // private calculations: Chronometer;
    currentTarget: PlacementPositionCandidate | null;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    readonly minAdvantage: number;
    // private onlyAboveSelf: boolean;
    // private /*not mapped: */ getOnlyAboveSelf(): boolean;
    // private placer: BlockPlacer;
    // private platformOnly: boolean;
    // private /*not mapped: */ getPlatformOnly(): boolean;
    /**
     * Excludes terrain for base place placements.
     * This can make the ca very inefficient in scuffed landscapes.
     *
     * Only has an effect if {@link CrystalAuraDamageOptions.terrain} is enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:77}
     */
    readonly terrain: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private timeOut: number;
    // private /*not mapped: */ getTimeOut(): number;
    // private trying: Chronometer;
    /**
     * Returns `true` if we can place a crystal base at the {@link pos} currently.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L199 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:199}
     */
    canBasePlace(running: boolean, pos: BlockPos, layers: { start: number; endInclusive: number; step: number }, state: BlockState): boolean;
    // private canEscapeThroughFloorOrCeiling(ceiling: BlockPos[], floor: BlockPos[]): boolean;
    // private canEscapeThroughSides(layerA: BlockPos[], layerB: BlockPos[]): boolean;
    /**
     * Returns a set of y levels the  base place can be placed in.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L179 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:179}
     */
    getBasePlaceLayers(targetY: number): { start: number; endInclusive: number; step: number };
    onDisabled(): void;
    // private playerWillNotRunIn(pos: BlockPos): boolean;
    /**
     * Returns whether base place should be calculated.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt#L163 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SubmoduleBasePlace.kt:163}
     */
    shouldBasePlaceRun(): boolean;
    // private willNotTrap(pos: BlockPos): boolean;
}