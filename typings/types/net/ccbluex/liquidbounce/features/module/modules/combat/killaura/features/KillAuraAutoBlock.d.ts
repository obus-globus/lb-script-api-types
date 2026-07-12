import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { KillAuraAutoBlock$BlockMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock$BlockMode.d.ts'
import type { KillAuraAutoBlock$UnblockMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock$UnblockMode.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { InteractionHand } from '../../../../../../../../../net/minecraft/world/InteractionHand.d.ts'
export class KillAuraAutoBlock extends ToggleableValueGroup {
    static INSTANCE: KillAuraAutoBlock;
    // private assumeShield: boolean;
    // private /*not mapped: */ getAssumeShield(): boolean;
    readonly blink: number;
    // private blinkHandler: EventHook<BlinkPacketEvent>;
    readonly blockImmediate: boolean;
    // private blockMode: KillAuraAutoBlock$BlockMode;
    // private /*not mapped: */ getBlockMode(): KillAuraAutoBlock$BlockMode;
    /**
     * Visual blocking shows a blocking state, while not actually blocking.
     * This is useful to make the blocking animation become much smoother.
     *
     * @see ItemInHandRenderer.renderArmWithItem
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt#L133 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt:133}
     */
    blockVisual: boolean;
    // private blockingTicks: number;
    readonly chance: number;
    // private changeSlot: EventHook<PacketEvent>;
    /**
     * Enforces the blocking state on the Input
     *
     * todo: fix open screen affecting this
     *
     * @see net.minecraft.client.Minecraft.handleKeybinds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt:115}
     */
    enforcedBlockingHand: InteractionHand | null;
    // private flushTicks: number;
    // private gameTickHandler: EventHook<GameTickEvent>;
    hasBlockedSinceAttack: boolean;
    // private isInDanger: boolean;
    /*not mapped: */ isInDanger(): boolean;
    /**
     * This will decrease our CPS and prioritize blocking.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt#L150 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt:150}
     */
    /*not mapped: */ isPrioritizingBlocking(): boolean;
    readonly onScanRange: boolean;
    // private onlyWhenInDanger: boolean;
    // private /*not mapped: */ getOnlyWhenInDanger(): boolean;
    pauseOnUnblockTicks: number;
    // private pauseOnUnblockTicksRange: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getPauseOnUnblockTicksRange(): { start: number; endInclusive: number; step: number };
    // private prioritizeBlocking: boolean;
    // private /*not mapped: */ getPrioritizeBlocking(): boolean;
    reblockTicks: number;
    // private reblockTicksRange: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getReblockTicksRange(): { start: number; endInclusive: number; step: number };
    readonly shouldUnblockToHit: boolean;
    // private simulateVanillaUse: boolean;
    // private /*not mapped: */ getSimulateVanillaUse(): boolean;
    // private unblockMode: KillAuraAutoBlock$UnblockMode;
    // private /*not mapped: */ getUnblockMode(): KillAuraAutoBlock$UnblockMode;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private findBlockableHand(): InteractionHand | null;
    // private genericUseItem(rotation: Rotation, blockHand: InteractionHand): boolean;
    // private interactWithFacing(rotation: Rotation, blockHand: InteractionHand): boolean;
    /**
     * Make it seem like the player is blocking.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt#L176 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt:176}
     */
    makeSeemBlock(): void;
    onDisabled(): void;
    /**
     * Starts blocking.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt#L187 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt:187}
     */
    startBlocking(): boolean;
    stopBlocking(pauses: boolean): boolean;
}