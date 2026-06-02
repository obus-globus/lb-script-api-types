import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { ServerboundPlayerActionPacket$Action } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerActionPacket$Action.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class ServerPlayerGameMode extends Object {
    constructor(player: ServerPlayer)
    // private delayedDestroyPos: BlockPos;
    // private delayedTickStart: number;
    // private destroyPos: BlockPos;
    // private destroyProgressStart: number;
    readonly gameModeForPlayer: GameType;
    // private gameTicks: number;
    // private hasDelayedDestroy: boolean;
    // private isDestroyingBlock: boolean;
    // private lastSentState: number;
    level: ServerLevel;
    // private player: ServerPlayer;
    readonly previousGameModeForPlayer: GameType;
    changeGameModeForPlayer(gameModeForPlayer: GameType): boolean;
    // private debugLogging(pos: BlockPos, allGood: boolean, sequence: number, message: string): void;
    destroyAndAck(pos: BlockPos, sequence: number, exitId: string): void;
    destroyBlock(pos: BlockPos): boolean;
    getGameModeForPlayer(): GameType;
    getPreviousGameModeForPlayer(): GameType;
    handleBlockBreakAction(pos: BlockPos, action: ServerboundPlayerActionPacket$Action, direction: Direction, maxY: number, sequence: number): void;
    // private incrementDestroyProgress(blockState: BlockState, delayedDestroyPos: BlockPos, destroyStartTick: number): number;
    isCreative(): boolean;
    // private isInRangeOfGround(): boolean;
    isSurvival(): boolean;
    setGameModeForPlayer(gameModeForPlayer: GameType, previousGameModeForPlayer: GameType): void;
    setLevel(newLevel: ServerLevel): void;
    tick(): void;
    useItem(player: ServerPlayer, level: Level, itemStack: ItemStack, hand: InteractionHand): InteractionResult;
    useItemOn(player: ServerPlayer, level: Level, itemStack: ItemStack, hand: InteractionHand, hitResult: BlockHitResult): InteractionResult;
}