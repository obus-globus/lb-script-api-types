import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ParseResults } from '../../../../com/mojang/brigadier/ParseResults.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListenerExtensions } from '../../../../net/fabricmc/fabric/impl/networking/PacketListenerExtensions.d.ts'
import type { ServerPlayNetworkAddon } from '../../../../net/fabricmc/fabric/impl/networking/server/ServerPlayNetworkAddon.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { TickablePacketListener } from '../../../../net/minecraft/network/TickablePacketListener.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { LastSeenMessages } from '../../../../net/minecraft/network/chat/LastSeenMessages.d.ts'
import type { LastSeenMessages$Update } from '../../../../net/minecraft/network/chat/LastSeenMessages$Update.d.ts'
import type { LastSeenMessagesValidator } from '../../../../net/minecraft/network/chat/LastSeenMessagesValidator.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { MessageSignatureCache } from '../../../../net/minecraft/network/chat/MessageSignatureCache.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { RemoteChatSession } from '../../../../net/minecraft/network/chat/RemoteChatSession.d.ts'
import type { SignableCommand } from '../../../../net/minecraft/network/chat/SignableCommand.d.ts'
import type { SignableCommand$Argument } from '../../../../net/minecraft/network/chat/SignableCommand$Argument.d.ts'
import type { SignedMessageBody } from '../../../../net/minecraft/network/chat/SignedMessageBody.d.ts'
import type { SignedMessageChain$DecodeException } from '../../../../net/minecraft/network/chat/SignedMessageChain$DecodeException.d.ts'
import type { SignedMessageChain$Decoder } from '../../../../net/minecraft/network/chat/SignedMessageChain$Decoder.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerboundClientInformationPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundClientInformationPacket.d.ts'
import type { ServerboundCustomPayloadPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundCustomPayloadPacket.d.ts'
import type { GameProtocols$Context } from '../../../../net/minecraft/network/protocol/game/GameProtocols$Context.d.ts'
import type { ServerGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ServerboundAcceptTeleportationPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundAcceptTeleportationPacket.d.ts'
import type { ServerboundAttackPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundAttackPacket.d.ts'
import type { ServerboundBlockEntityTagQueryPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundBlockEntityTagQueryPacket.d.ts'
import type { ServerboundChangeDifficultyPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundChangeDifficultyPacket.d.ts'
import type { ServerboundChangeGameModePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundChangeGameModePacket.d.ts'
import type { ServerboundChatAckPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundChatAckPacket.d.ts'
import type { ServerboundChatCommandPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundChatCommandPacket.d.ts'
import type { ServerboundChatCommandSignedPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundChatCommandSignedPacket.d.ts'
import type { ServerboundChatPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundChatPacket.d.ts'
import type { ServerboundChatSessionUpdatePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundChatSessionUpdatePacket.d.ts'
import type { ServerboundChunkBatchReceivedPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundChunkBatchReceivedPacket.d.ts'
import type { ServerboundClientCommandPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundClientCommandPacket.d.ts'
import type { ServerboundClientTickEndPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundClientTickEndPacket.d.ts'
import type { ServerboundCommandSuggestionPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundCommandSuggestionPacket.d.ts'
import type { ServerboundConfigurationAcknowledgedPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundConfigurationAcknowledgedPacket.d.ts'
import type { ServerboundContainerButtonClickPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundContainerButtonClickPacket.d.ts'
import type { ServerboundContainerClickPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundContainerClickPacket.d.ts'
import type { ServerboundContainerClosePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundContainerClosePacket.d.ts'
import type { ServerboundContainerSlotStateChangedPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundContainerSlotStateChangedPacket.d.ts'
import type { ServerboundDebugSubscriptionRequestPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundDebugSubscriptionRequestPacket.d.ts'
import type { ServerboundEditBookPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundEditBookPacket.d.ts'
import type { ServerboundEntityTagQueryPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundEntityTagQueryPacket.d.ts'
import type { ServerboundInteractPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundInteractPacket.d.ts'
import type { ServerboundJigsawGeneratePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundJigsawGeneratePacket.d.ts'
import type { ServerboundLockDifficultyPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundLockDifficultyPacket.d.ts'
import type { ServerboundMovePlayerPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundMovePlayerPacket.d.ts'
import type { ServerboundMoveVehiclePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundMoveVehiclePacket.d.ts'
import type { ServerboundPaddleBoatPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPaddleBoatPacket.d.ts'
import type { ServerboundPickItemFromBlockPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPickItemFromBlockPacket.d.ts'
import type { ServerboundPickItemFromEntityPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPickItemFromEntityPacket.d.ts'
import type { ServerboundPlaceRecipePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPlaceRecipePacket.d.ts'
import type { ServerboundPlayerAbilitiesPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerAbilitiesPacket.d.ts'
import type { ServerboundPlayerActionPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerActionPacket.d.ts'
import type { ServerboundPlayerCommandPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerCommandPacket.d.ts'
import type { ServerboundPlayerInputPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerInputPacket.d.ts'
import type { ServerboundPlayerLoadedPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerLoadedPacket.d.ts'
import type { ServerboundRecipeBookChangeSettingsPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundRecipeBookChangeSettingsPacket.d.ts'
import type { ServerboundRecipeBookSeenRecipePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundRecipeBookSeenRecipePacket.d.ts'
import type { ServerboundRenameItemPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundRenameItemPacket.d.ts'
import type { ServerboundSeenAdvancementsPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSeenAdvancementsPacket.d.ts'
import type { ServerboundSelectBundleItemPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSelectBundleItemPacket.d.ts'
import type { ServerboundSelectTradePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSelectTradePacket.d.ts'
import type { ServerboundSetBeaconPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetBeaconPacket.d.ts'
import type { ServerboundSetCarriedItemPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetCarriedItemPacket.d.ts'
import type { ServerboundSetCommandBlockPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetCommandBlockPacket.d.ts'
import type { ServerboundSetCommandMinecartPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetCommandMinecartPacket.d.ts'
import type { ServerboundSetCreativeModeSlotPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetCreativeModeSlotPacket.d.ts'
import type { ServerboundSetGameRulePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetGameRulePacket.d.ts'
import type { ServerboundSetJigsawBlockPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetJigsawBlockPacket.d.ts'
import type { ServerboundSetStructureBlockPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetStructureBlockPacket.d.ts'
import type { ServerboundSetTestBlockPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSetTestBlockPacket.d.ts'
import type { ServerboundSignUpdatePacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSignUpdatePacket.d.ts'
import type { ServerboundSpectateEntityPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSpectateEntityPacket.d.ts'
import type { ServerboundSwingPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundSwingPacket.d.ts'
import type { ServerboundTeleportToEntityPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundTeleportToEntityPacket.d.ts'
import type { ServerboundTestInstanceBlockActionPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundTestInstanceBlockActionPacket.d.ts'
import type { ServerboundUseItemOnPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundUseItemOnPacket.d.ts'
import type { ServerboundUseItemPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundUseItemPacket.d.ts'
import type { ServerboundPingRequestPacket } from '../../../../net/minecraft/network/protocol/ping/ServerboundPingRequestPacket.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { CommonListenerCookie } from '../../../../net/minecraft/server/network/CommonListenerCookie.d.ts'
import type { Filterable } from '../../../../net/minecraft/server/network/Filterable.d.ts'
import type { FilteredText } from '../../../../net/minecraft/server/network/FilteredText.d.ts'
import type { PlayerChunkSender } from '../../../../net/minecraft/server/network/PlayerChunkSender.d.ts'
import type { ServerCommonPacketListenerImpl } from '../../../../net/minecraft/server/network/ServerCommonPacketListenerImpl.d.ts'
import type { ServerPlayerConnection } from '../../../../net/minecraft/server/network/ServerPlayerConnection.d.ts'
import type { TextFilter } from '../../../../net/minecraft/server/network/TextFilter.d.ts'
import type { FutureChain } from '../../../../net/minecraft/util/FutureChain.d.ts'
import type { TickThrottler } from '../../../../net/minecraft/util/TickThrottler.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { PositionMoveRotation } from '../../../../net/minecraft/world/entity/PositionMoveRotation.d.ts'
import type { Relative } from '../../../../net/minecraft/world/entity/Relative.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LevelReader } from '../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { GameRule } from '../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRules } from '../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class ServerGamePacketListenerImpl extends ServerCommonPacketListenerImpl implements PacketListenerExtensions, TickablePacketListener, GameProtocols$Context, ServerGamePacketListener, ServerPlayerConnection {
    static CLIENT_LOADED_TIMEOUT_TIME: number;
    static LATENCY_CHECK_INTERVAL: number;
    static LOGGER: Logger;
    constructor(server: MinecraftServer, connection: Connection, player: ServerPlayer, cookie: CommonListenerCookie)
    // private aboveGroundTickCount: number;
    // private aboveGroundVehicleTickCount: number;
    // private ackBlockChangesUpTo: number;
    readonly addon: ServerPlayNetworkAddon;
    // private awaitingPositionFromClient: Vec3;
    // private awaitingTeleport: number;
    // private awaitingTeleportTime: number;
    // private chatMessageChain: FutureChain;
    // private chatSession: RemoteChatSession;
    // private chatSpamThrottler: TickThrottler;
    chunkSender: PlayerChunkSender;
    // private clientIsFloating: boolean;
    // private clientLoadedTimeoutTimer: number;
    // private clientVehicleIsFloating: boolean;
    // private dropSpamThrottler: TickThrottler;
    // private firstGoodX: number;
    // private firstGoodY: number;
    // private firstGoodZ: number;
    // private knownMovePacketCount: number;
    // private lastGoodX: number;
    // private lastGoodY: number;
    // private lastGoodZ: number;
    // private lastSeenMessages: LastSeenMessagesValidator;
    // private lastVehicle: Entity;
    // private messageSignatureCache: MessageSignatureCache;
    // private nextChatIndex: number;
    player: ServerPlayer;
    // private receivedMovePacketCount: number;
    // private receivedMovementThisTick: boolean;
    // private signedMessageDecoder: (param0: MessageSignature, param1: SignedMessageBody) => net.minecraft.network.chat.PlayerChatMessage;
    // private tickCount: number;
    // private vehicleFirstGoodX: number;
    // private vehicleFirstGoodY: number;
    // private vehicleFirstGoodZ: number;
    // private vehicleLastGoodX: number;
    // private vehicleLastGoodY: number;
    // private vehicleLastGoodZ: number;
    // private waitingForRespawn: boolean;
    // private waitingForSwitchToConfig: boolean;
    ackBlockChangesUpTo(packetSequenceNr: number): void;
    // private broadcastChatMessage(message: PlayerChatMessage): void;
    // private broadcastGameRuleChangeToOperators<T extends Object | number | string | boolean>(rule: GameRule<T>, value: T): void;
    // private collectSignedArguments(packet: ServerboundChatCommandSignedPacket, command: SignableCommand<S>, lastSeenMessages: LastSeenMessages): { [key: string]: PlayerChatMessage };
    // private collectUnsignedArguments(parsedArguments: SignableCommand$Argument<S>[]): { [key: string]: PlayerChatMessage };
    // private detectRateSpam(): void;
    // private filterTextPacket<T extends Object | number | string | boolean>(message: T, action: (param0: TextFilter, param1: T) => CompletableFuture<R>): CompletableFuture<R>;
    // private filterTextPacket(message: string): CompletableFuture<FilteredText>;
    // private filterTextPacket(message: string[]): CompletableFuture<FilteredText[]>;
    // private filterableFromOutgoing(text: FilteredText): Filterable<string>;
    getAddon(): ServerPlayNetworkAddon;
    // private getMaximumFlyingTicks(entity: Entity): number;
    getPlayer(): ServerPlayer;
    getRemoteAddress(): SocketAddress;
    // private getSignedMessage(packet: ServerboundChatPacket, lastSeenMessages: LastSeenMessages): PlayerChatMessage;
    handleAcceptPlayerLoad(packet: ServerboundPlayerLoadedPacket): void;
    handleAcceptTeleportPacket(packet: ServerboundAcceptTeleportationPacket): void;
    handleAnimate(packet: ServerboundSwingPacket): void;
    handleAttack(packet: ServerboundAttackPacket): void;
    handleBlockEntityTagQuery(packet: ServerboundBlockEntityTagQueryPacket): void;
    handleBundleItemSelectedPacket(packet: ServerboundSelectBundleItemPacket): void;
    handleChangeDifficulty(packet: ServerboundChangeDifficultyPacket): void;
    handleChangeGameMode(packet: ServerboundChangeGameModePacket): void;
    handleChat(packet: ServerboundChatPacket): void;
    handleChatAck(packet: ServerboundChatAckPacket): void;
    handleChatCommand(packet: ServerboundChatCommandPacket): void;
    handleChatSessionUpdate(packet: ServerboundChatSessionUpdatePacket): void;
    handleChunkBatchReceived(packet: ServerboundChunkBatchReceivedPacket): void;
    handleClientCommand(packet: ServerboundClientCommandPacket): void;
    handleClientInformation(packet: ServerboundClientInformationPacket): void;
    handleClientTickEnd(packet: ServerboundClientTickEndPacket): void;
    handleConfigurationAcknowledged(packet: ServerboundConfigurationAcknowledgedPacket): void;
    handleContainerButtonClick(packet: ServerboundContainerButtonClickPacket): void;
    handleContainerClick(packet: ServerboundContainerClickPacket): void;
    handleContainerClose(packet: ServerboundContainerClosePacket): void;
    handleContainerSlotStateChanged(packet: ServerboundContainerSlotStateChangedPacket): void;
    handleCustomCommandSuggestions(packet: ServerboundCommandSuggestionPacket): void;
    handleCustomPayload(packet: ServerboundCustomPayloadPacket): void;
    handleDebugSubscriptionRequest(packet: ServerboundDebugSubscriptionRequestPacket): void;
    handleEditBook(packet: ServerboundEditBookPacket): void;
    handleEntityTagQuery(packet: ServerboundEntityTagQueryPacket): void;
    handleInteract(packet: ServerboundInteractPacket): void;
    handleJigsawGenerate(packet: ServerboundJigsawGeneratePacket): void;
    handleLockDifficulty(packet: ServerboundLockDifficultyPacket): void;
    // private handleMessageDecodeFailure(e: SignedMessageChain$DecodeException): void;
    handleMovePlayer(packet: ServerboundMovePlayerPacket): void;
    handleMoveVehicle(packet: ServerboundMoveVehiclePacket): void;
    handlePaddleBoat(packet: ServerboundPaddleBoatPacket): void;
    handlePickItemFromBlock(packet: ServerboundPickItemFromBlockPacket): void;
    handlePickItemFromEntity(packet: ServerboundPickItemFromEntityPacket): void;
    handlePingRequest(packet: ServerboundPingRequestPacket): void;
    handlePlaceRecipe(packet: ServerboundPlaceRecipePacket): void;
    handlePlayerAbilities(packet: ServerboundPlayerAbilitiesPacket): void;
    handlePlayerAction(packet: ServerboundPlayerActionPacket): void;
    handlePlayerCommand(packet: ServerboundPlayerCommandPacket): void;
    handlePlayerInput(packet: ServerboundPlayerInputPacket): void;
    // private handlePlayerKnownMovement(movement: Vec3): void;
    handleRecipeBookChangeSettingsPacket(packet: ServerboundRecipeBookChangeSettingsPacket): void;
    handleRecipeBookSeenRecipePacket(packet: ServerboundRecipeBookSeenRecipePacket): void;
    handleRenameItem(packet: ServerboundRenameItemPacket): void;
    handleSeenAdvancements(packet: ServerboundSeenAdvancementsPacket): void;
    handleSelectTrade(packet: ServerboundSelectTradePacket): void;
    handleSetBeaconPacket(packet: ServerboundSetBeaconPacket): void;
    handleSetCarriedItem(packet: ServerboundSetCarriedItemPacket): void;
    handleSetCommandBlock(packet: ServerboundSetCommandBlockPacket): void;
    handleSetCommandMinecart(packet: ServerboundSetCommandMinecartPacket): void;
    handleSetCreativeModeSlot(packet: ServerboundSetCreativeModeSlotPacket): void;
    handleSetGameRule(packet: ServerboundSetGameRulePacket): void;
    handleSetJigsawBlock(packet: ServerboundSetJigsawBlockPacket): void;
    handleSetStructureBlock(packet: ServerboundSetStructureBlockPacket): void;
    handleSetTestBlock(packet: ServerboundSetTestBlockPacket): void;
    handleSignUpdate(packet: ServerboundSignUpdatePacket): void;
    handleSignedChatCommand(packet: ServerboundChatCommandSignedPacket): void;
    handleSpectateEntity(packet: ServerboundSpectateEntityPacket): void;
    handleTeleportToEntityPacket(packet: ServerboundTeleportToEntityPacket): void;
    handleTestInstanceBlockAction(packet: ServerboundTestInstanceBlockActionPacket): void;
    handleUseItem(packet: ServerboundUseItemPacket): void;
    handleUseItemOn(packet: ServerboundUseItemOnPacket): void;
    hasClientLoaded(): boolean;
    hasInfiniteMaterials(): boolean;
    isAcceptingMessages(): boolean;
    // private isEntityCollidingWithAnythingNew(level: LevelReader, entity: Entity, oldAABB: AABB, newX: number, newY: number, newZ: number): boolean;
    // private markClientLoaded(): void;
    markClientUnloadedAfterDeath(): void;
    // private noBlocksAround(entity: Entity): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    // private parseCommand(command: string): ParseResults<CommandSourceStack>;
    // private performSignedChatCommand(packet: ServerboundChatCommandSignedPacket, lastSeenMessages: LastSeenMessages): void;
    // private performUnsignedChatCommand(command: string): void;
    playerProfile(): GameProfile;
    protocol(): ConnectionProtocol;
    // private removePlayerFromWorld(): void;
    resetFlyingTicks(): void;
    // private resetPlayerChatState(chatSession: RemoteChatSession): void;
    resetPosition(): void;
    // private restartClientLoadTimerAfterRespawn(): void;
    sendDisguisedChatMessage(content: Component, chatType: ChatType$Bound): void;
    // private sendGameRuleValues(): void;
    sendPlayerChatMessage(message: PlayerChatMessage, chatType: ChatType$Bound): void;
    // private setGameRuleValue(gameRules: GameRules, rule: GameRule<T>, value: string): void;
    // private shouldCheckPlayerMovement(isFallFlying: boolean): boolean;
    shouldHandleMessage(packet: Packet<Object>): boolean;
    // private signBook(title: FilteredText, contents: FilteredText[], slot: number): void;
    switchToConfig(): void;
    teleport(x: number, y: number, z: number, yRot: number, xRot: number): void;
    teleport(destination: PositionMoveRotation, relatives: Relative[]): void;
    tick(): void;
    tickClientLoadTimeout(): void;
    // private tickPlayer(): boolean;
    // private tryHandleChat(message: string, isCommand: boolean, chatHandler: () => void): void;
    // private tryPickItem(itemStack: ItemStack): void;
    // private unpackAndApplyLastSeen(update: LastSeenMessages$Update): Optional<LastSeenMessages>;
    // private updateAwaitingTeleport(): boolean;
    // private updateBookContents(contents: FilteredText[], slot: number): void;
    // private updateSignText(packet: ServerboundSignUpdatePacket, lines: FilteredText[]): void;
}