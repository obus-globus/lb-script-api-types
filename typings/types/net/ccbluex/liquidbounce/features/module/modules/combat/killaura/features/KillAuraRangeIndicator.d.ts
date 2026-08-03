import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { KillAuraRangeIndicator$ColorMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRangeIndicator$ColorMode.d.ts'
import type { WorldRenderEnvironment } from '../../../../../../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { Color4b } from '../../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Renders a circle around the player indicating the KillAura attack range.
 * Synced with KillAura settings for Range, WallRange, and IgnoreOpenInventory.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRangeIndicator.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRangeIndicator.kt:44}
 */
export class KillAuraRangeIndicator extends ToggleableValueGroup {
    static INSTANCE: KillAuraRangeIndicator;
    // private activeColor: Color4b;
    // private /*not mapped: */ getActiveColor(): Color4b;
    // private canBeCovered: boolean;
    // private /*not mapped: */ getCanBeCovered(): boolean;
    // private colorFactor: number;
    // private colorMode: KillAuraRangeIndicator$ColorMode;
    // private /*not mapped: */ getColorMode(): KillAuraRangeIndicator$ColorMode;
    // private fadeAnimation: boolean;
    // private /*not mapped: */ getFadeAnimation(): boolean;
    // private fadeSpeed: number;
    // private /*not mapped: */ getFadeSpeed(): number;
    // private hideInVehicle: boolean;
    // private /*not mapped: */ getHideInVehicle(): boolean;
    // private hideWhenDead: boolean;
    // private /*not mapped: */ getHideWhenDead(): boolean;
    // private hideWhenSpectator: boolean;
    // private /*not mapped: */ getHideWhenSpectator(): boolean;
    // private idleColor: Color4b;
    // private /*not mapped: */ getIdleColor(): Color4b;
    // private opponentRangeColor: Color4b;
    // private /*not mapped: */ getOpponentRangeColor(): Color4b;
    // private outline: boolean;
    // private /*not mapped: */ getOutline(): boolean;
    // private outlineColor: Color4b;
    // private /*not mapped: */ getOutlineColor(): Color4b;
    // private pulseAnimation: boolean;
    // private /*not mapped: */ getPulseAnimation(): boolean;
    // private pulseIntensity: number;
    // private /*not mapped: */ getPulseIntensity(): number;
    // private pulseSpeed: number;
    // private /*not mapped: */ getPulseSpeed(): number;
    // private respectInventorySetting: boolean;
    // private /*not mapped: */ getRespectInventorySetting(): boolean;
    // private scanRangeColor: Color4b;
    // private /*not mapped: */ getScanRangeColor(): Color4b;
    // private wallRangeColor: Color4b;
    // private /*not mapped: */ getWallRangeColor(): Color4b;
    // private calculatePulse(range: number): number;
    // private canRender(): boolean;
    // private getColor(distance: number | null, range: number): Color4b;
    render(env: WorldRenderEnvironment, partialTicks: number): void;
    // private renderIndicator(env: WorldRenderEnvironment, partialTicks: number, target: LivingEntity | null): void;
    // private updateColorFactor(hasTarget: boolean): void;
}