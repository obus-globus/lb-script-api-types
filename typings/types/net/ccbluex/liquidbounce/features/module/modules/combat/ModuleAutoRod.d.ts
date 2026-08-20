import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoRod$GravityType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoRod$GravityType.d.ts'
import type { ModuleAutoRod$Ignore } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoRod$Ignore.d.ts'
import type { KillAuraRequirements } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraRequirements.d.ts'
import type { RotationsValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { PointTracker } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointTracker.d.ts'
import type { SwingMode } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { TargetTracker } from '../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { FishingHook } from '../../../../../../../net/minecraft/world/entity/projectile/FishingHook.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * Auto use fishing rod for combat.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoRod.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoRod.kt:75}
 */
export class ModuleAutoRod extends ClientModule {
    static INSTANCE: ModuleAutoRod;
    // private aimOffThreshold: number;
    // private /*not mapped: */ getAimOffThreshold(): number;
    // private availableRodSlot: HotbarItemSlot | null;
    // private /*not mapped: */ getAvailableRodSlot(): HotbarItemSlot | null;
    // private cooldown: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getCooldown(): { start: number; endInclusive: number; step: number };
    // private currentScanExtraRange: number;
    // private fishingBobberEntity: FishingHook | null;
    // private /*not mapped: */ getFishingBobberEntity(): FishingHook | null;
    // private gravityType: ModuleAutoRod$GravityType;
    // private /*not mapped: */ getGravityType(): ModuleAutoRod$GravityType;
    // private handleAutoRod: EventHook<GameTickEvent>;
    // private hitTimeout: number;
    // private /*not mapped: */ getHitTimeout(): number;
    // private holdingItemsForIgnore: Item[];
    // private /*not mapped: */ getHoldingItemsForIgnore(): Item[];
    // private ignores: ModuleAutoRod$Ignore[];
    // private /*not mapped: */ getIgnores(): ModuleAutoRod$Ignore[];
    // private maxEnemiesNearby: number;
    // private /*not mapped: */ getMaxEnemiesNearby(): number;
    // private minHealth: number;
    // private /*not mapped: */ getMinHealth(): number;
    // private minTargetHealth: number;
    // private /*not mapped: */ getMinTargetHealth(): number;
    // private pointTracker: PointTracker;
    // private pullOnOutOfRange: boolean;
    // private /*not mapped: */ getPullOnOutOfRange(): boolean;
    // private range: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getRange(): ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getRequirementsMet(): boolean;
    // private requires: KillAuraRequirements[];
    // private /*not mapped: */ getRequires(): KillAuraRequirements[];
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private rotations: RotationsValueGroup;
    // private scanExtraRange: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getScanExtraRange(): ClosedFloatingPointRange<number>;
    // private slotResetDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSlotResetDelay(): { start: number; endInclusive: number; step: number };
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private targetTracker: TargetTracker;
    onDisabled(): void;
}