import type { CommandDispatcher } from '../../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { CommandRegistrar } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { FakePlayer } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.d.ts'
import type { PosPoseSnapshot } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/PosPoseSnapshot.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Fake Player Command
 *
 * Allows you to spawn a client side player for testing purposes.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt:66}
 */
export class CommandFakePlayer extends Object implements EventListener, CommandRegistrar {
    static INSTANCE: CommandFakePlayer;
    // private attackHandler: EventHook<AttackEntityEvent>;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly explosionHandler: EventHook<PacketEvent>;
    // private fakePlayers: FakePlayer[];
    // private recording: boolean;
    readonly running: boolean;
    // private snapshots: PosPoseSnapshot[];
    // private suggestions: (param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    /**
     * Recordings are made in the tick event handler.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt#L329 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt:329}
     */
    readonly tickHandler: EventHook<GameTickEvent>;
    // private calculateAttackDamage(fakePlayer: LivingEntity): number;
    children(): EventListener[];
    parent(): EventListener | null;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
    // private stopRecording(): void;
    unregister(): void;
}