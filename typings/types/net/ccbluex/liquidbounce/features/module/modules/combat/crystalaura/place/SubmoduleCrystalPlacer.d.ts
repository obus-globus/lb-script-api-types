import type { Pair } from '../../../../../../../../../kotlin/Pair.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { SwitchMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/SwitchMode.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationWithVector } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationWithVector.d.ts'
import type { SwingMode } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Chronometer } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { PlacementRenderer } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class SubmoduleCrystalPlacer extends ToggleableValueGroup {
    static INSTANCE: SubmoduleCrystalPlacer;
    // private blockHitResult: BlockHitResult | null;
    // private chronometer: Chronometer;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private jitter: boolean;
    // private /*not mapped: */ getJitter(): boolean;
    // private notFacingAway: boolean;
    // private /*not mapped: */ getNotFacingAway(): boolean;
    readonly oldVersion: boolean;
    /**
     * Only place crystals above the block.
     * Outdated setting.
     * Using this is normally not recommended.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/SubmoduleCrystalPlacer.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/SubmoduleCrystalPlacer.kt:66}
     */
    readonly onlyAbove: boolean;
    readonly placementRenderer: PlacementRenderer;
    // private previousRotations: Pair<Rotation, Rotation>[];
    readonly range: number;
    // private sequenced: boolean;
    // private /*not mapped: */ getSequenced(): boolean;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private switchMode: SwitchMode;
    // private /*not mapped: */ getSwitchMode(): SwitchMode;
    readonly wallsRange: number;
    // private addToRenderer(): void | null;
    getMaxRange(): number;
    // private getSlot(): number | null;
    // private queuePlacing(rotation: RotationWithVector, targetPos: BlockPos, side: Direction): void;
    // private removeFromRenderer(): void | null;
    tick(excludeIds: number[] | null): void;
    // private updatePrevious(rotation: RotationWithVector): void;
}