import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { FilteredText } from '../../../../../../net/minecraft/server/network/FilteredText.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { SignText } from '../../../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class SignBlockEntity extends BlockEntity {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static tick(paramlevel: Level, paramblockPos: BlockPos, paramblockState: BlockState, paramsignBlockEntity: SignBlockEntity): void;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    constructor(type: BlockEntityType<SignBlockEntity>, worldPosition: BlockPos, blockState: BlockState)
    readonly backText: SignText;
    readonly frontText: SignText;
    // private isWaxed: boolean;
    readonly playerWhoMayEdit: UUID;
    canExecuteClickCommands(isFrontText: boolean, player: Player): boolean;
    // private clearInvalidPlayerWhoMayEdit(signBlockEntity: SignBlockEntity, level: Level, playerWhoMayEdit: UUID): void;
    createDefaultSignText(): SignText;
    executeClickCommandsIfPresent(level: ServerLevel, player: Player, pos: BlockPos, isFrontText: boolean): boolean;
    getBackText(): SignText;
    getFrontText(): SignText;
    getMaxTextLineWidth(): number;
    getPlayerWhoMayEdit(): UUID;
    getSignInteractionFailedSoundEvent(): SoundEvent;
    getText(isFrontText: boolean): SignText;
    getTextLineHeight(): number;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    isFacingFrontText(player: Player): boolean;
    isWaxed(): boolean;
    loadAdditional(input: ValueInput): void;
    // private loadLine(component: Component): Component;
    // private loadLines(data: SignText): SignText;
    // private markUpdated(): void;
    playerIsTooFarAwayToEdit(player: UUID): boolean;
    saveAdditional(output: ValueOutput): void;
    setAllowedPlayerEditor(playerUUID: UUID): void;
    // private setBackText(text: SignText): boolean;
    // private setFrontText(text: SignText): boolean;
    // private setMessages(player: Player, lines: FilteredText[], text: SignText): SignText;
    setText(text: SignText, isFrontText: boolean): boolean;
    setWaxed(isWaxed: boolean): boolean;
    updateSignText(player: Player, frontText: boolean, lines: FilteredText[]): void;
    updateText(function_: (param0: SignText) => SignText, isFrontText: boolean): boolean;
}