import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { ServerboundPlayerActionPacket$Action } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerActionPacket$Action.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ServerPlayerGameMode } from '../../../../net/minecraft/server/level/ServerPlayerGameMode.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class DemoMode extends ServerPlayerGameMode {
    static DEMO_DAYS: number;
    static TOTAL_PLAY_TICKS: number;
    constructor(player: ServerPlayer)
    // private demoEndedReminder: number;
    // private demoHasEnded: boolean;
    // private displayedIntro: boolean;
    // private gameModeTicks: number;
    handleBlockBreakAction(pos: BlockPos, action: ServerboundPlayerActionPacket$Action, direction: Direction, maxY: number, sequence: number): void;
    // private outputDemoReminder(): void;
    tick(): void;
    useItem(player: ServerPlayer, level: Level, itemStack: ItemStack, hand: InteractionHand): InteractionResult;
    useItemOn(player: ServerPlayer, level: Level, itemStack: ItemStack, hand: InteractionHand, hitResult: BlockHitResult): InteractionResult;
}