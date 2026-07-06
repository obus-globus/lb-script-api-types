import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockAttackEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockAttackEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { MineRotationMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.d.ts'
import type { MineTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { MineMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/mode/MineMode.d.ts'
import type { MineToolMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/MineToolMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { SwingMode } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { PlacementRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * PacketMine module
 *
 * Automatically mines blocks you click once. Using AutoTool is recommended.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/ModulePacketMine.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/ModulePacketMine.kt:68}
 */
export class ModulePacketMine extends ClientModule {
    static INSTANCE: ModulePacketMine;
    /**
     * The current target of the module.
     *
     * Should never be accessed directly by other modules!
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/ModulePacketMine.kt#L132 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/ModulePacketMine.kt:132}
     */
    _target: MineTarget | null;
    readonly abortAlwaysDown: boolean;
    // private blockAttackHandler: EventHook<BlockAttackEvent>;
    // private blockUpdateHandler: EventHook<PacketEvent>;
    readonly breakDamage: number;
    // private chronometer: Chronometer;
    // private ignoreOpenInventory: boolean;
    // private /*not mapped: */ getIgnoreOpenInventory(): boolean;
    readonly keepRange: number;
    readonly mode: ModeValueGroup<MineMode>;
    // private mouseButtonHandler: EventHook<MouseButtonEvent>;
    // private nextAllowedStartTick: number;
    // private postBreakDelay: number;
    // private /*not mapped: */ getPostBreakDelay(): number;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private repeatable: EventHook<GameTickEvent>;
    // private rotation: Rotation | null;
    // private rotationMode: MineRotationMode;
    // private /*not mapped: */ getRotationMode(): MineRotationMode;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private rotations: RotationsValueGroup;
    // private selectDelay: number;
    // private /*not mapped: */ getSelectDelay(): number;
    readonly swingMode: SwingMode;
    readonly switchMode: ModeValueGroup<MineToolMode>;
    readonly targetRenderer: PlacementRenderer;
    // private tickCounter: number;
    // private wallsRange: number;
    // private /*not mapped: */ getWallsRange(): number;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    _resetTarget(): void;
    // private handleBreaking(mineTarget: MineTarget): void;
    onDisabled(): void;
    onEnabled(): void;
    // private rotate(mineTarget: MineTarget): void;
    setTarget(blockPos: BlockPos): void;
    // private shouldBlockTargetChange(mineTarget: MineTarget): boolean;
    // private startBreaking(slot: HotbarItemSlot | null, mineTarget: MineTarget): void;
    switch(slot: HotbarItemSlot | null, mineTarget: MineTarget): void;
    // private updateBreakingProgress(mineTarget: MineTarget, slot: HotbarItemSlot | null): void;
    // private updatePosOnChange(pos: BlockPos, state: BlockState): void;
}