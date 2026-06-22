import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { ServerCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { ServerboundClientInformationPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundClientInformationPacket.d.ts'
import type { ServerboundCustomClickActionPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundCustomClickActionPacket.d.ts'
import type { ServerboundCustomPayloadPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundCustomPayloadPacket.d.ts'
import type { ServerboundKeepAlivePacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundKeepAlivePacket.d.ts'
import type { ServerboundPongPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundPongPacket.d.ts'
import type { ServerboundResourcePackPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundResourcePackPacket.d.ts'
import type { ServerboundCookieResponsePacket } from '../../../../../net/minecraft/network/protocol/cookie/ServerboundCookieResponsePacket.d.ts'
import type { ServerboundAcceptTeleportationPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundAcceptTeleportationPacket.d.ts'
import type { ServerboundAttackPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundAttackPacket.d.ts'
import type { ServerboundBlockEntityTagQueryPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundBlockEntityTagQueryPacket.d.ts'
import type { ServerboundChangeDifficultyPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundChangeDifficultyPacket.d.ts'
import type { ServerboundChangeGameModePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundChangeGameModePacket.d.ts'
import type { ServerboundChatAckPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundChatAckPacket.d.ts'
import type { ServerboundChatCommandPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundChatCommandPacket.d.ts'
import type { ServerboundChatCommandSignedPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundChatCommandSignedPacket.d.ts'
import type { ServerboundChatPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundChatPacket.d.ts'
import type { ServerboundChatSessionUpdatePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundChatSessionUpdatePacket.d.ts'
import type { ServerboundChunkBatchReceivedPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundChunkBatchReceivedPacket.d.ts'
import type { ServerboundClientCommandPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundClientCommandPacket.d.ts'
import type { ServerboundClientTickEndPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundClientTickEndPacket.d.ts'
import type { ServerboundCommandSuggestionPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundCommandSuggestionPacket.d.ts'
import type { ServerboundConfigurationAcknowledgedPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundConfigurationAcknowledgedPacket.d.ts'
import type { ServerboundContainerButtonClickPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundContainerButtonClickPacket.d.ts'
import type { ServerboundContainerClickPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundContainerClickPacket.d.ts'
import type { ServerboundContainerClosePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundContainerClosePacket.d.ts'
import type { ServerboundContainerSlotStateChangedPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundContainerSlotStateChangedPacket.d.ts'
import type { ServerboundDebugSubscriptionRequestPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundDebugSubscriptionRequestPacket.d.ts'
import type { ServerboundEditBookPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundEditBookPacket.d.ts'
import type { ServerboundEntityTagQueryPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundEntityTagQueryPacket.d.ts'
import type { ServerboundInteractPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundInteractPacket.d.ts'
import type { ServerboundJigsawGeneratePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundJigsawGeneratePacket.d.ts'
import type { ServerboundLockDifficultyPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundLockDifficultyPacket.d.ts'
import type { ServerboundMovePlayerPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundMovePlayerPacket.d.ts'
import type { ServerboundMoveVehiclePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundMoveVehiclePacket.d.ts'
import type { ServerboundPaddleBoatPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPaddleBoatPacket.d.ts'
import type { ServerboundPickItemFromBlockPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPickItemFromBlockPacket.d.ts'
import type { ServerboundPickItemFromEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPickItemFromEntityPacket.d.ts'
import type { ServerboundPlaceRecipePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPlaceRecipePacket.d.ts'
import type { ServerboundPlayerAbilitiesPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPlayerAbilitiesPacket.d.ts'
import type { ServerboundPlayerActionPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPlayerActionPacket.d.ts'
import type { ServerboundPlayerCommandPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPlayerCommandPacket.d.ts'
import type { ServerboundPlayerInputPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPlayerInputPacket.d.ts'
import type { ServerboundPlayerLoadedPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundPlayerLoadedPacket.d.ts'
import type { ServerboundRecipeBookChangeSettingsPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundRecipeBookChangeSettingsPacket.d.ts'
import type { ServerboundRecipeBookSeenRecipePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundRecipeBookSeenRecipePacket.d.ts'
import type { ServerboundRenameItemPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundRenameItemPacket.d.ts'
import type { ServerboundSeenAdvancementsPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSeenAdvancementsPacket.d.ts'
import type { ServerboundSelectBundleItemPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSelectBundleItemPacket.d.ts'
import type { ServerboundSelectTradePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSelectTradePacket.d.ts'
import type { ServerboundSetBeaconPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetBeaconPacket.d.ts'
import type { ServerboundSetCarriedItemPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetCarriedItemPacket.d.ts'
import type { ServerboundSetCommandBlockPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetCommandBlockPacket.d.ts'
import type { ServerboundSetCommandMinecartPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetCommandMinecartPacket.d.ts'
import type { ServerboundSetCreativeModeSlotPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetCreativeModeSlotPacket.d.ts'
import type { ServerboundSetGameRulePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetGameRulePacket.d.ts'
import type { ServerboundSetJigsawBlockPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetJigsawBlockPacket.d.ts'
import type { ServerboundSetStructureBlockPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetStructureBlockPacket.d.ts'
import type { ServerboundSetTestBlockPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetTestBlockPacket.d.ts'
import type { ServerboundSignUpdatePacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSignUpdatePacket.d.ts'
import type { ServerboundSpectateEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSpectateEntityPacket.d.ts'
import type { ServerboundSwingPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSwingPacket.d.ts'
import type { ServerboundTeleportToEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundTeleportToEntityPacket.d.ts'
import type { ServerboundTestInstanceBlockActionPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundTestInstanceBlockActionPacket.d.ts'
import type { ServerboundUseItemOnPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundUseItemOnPacket.d.ts'
import type { ServerboundUseItemPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundUseItemPacket.d.ts'
import type { ServerPingPacketListener } from '../../../../../net/minecraft/network/protocol/ping/ServerPingPacketListener.d.ts'
import type { ServerboundPingRequestPacket } from '../../../../../net/minecraft/network/protocol/ping/ServerboundPingRequestPacket.d.ts'
export interface ServerGamePacketListener extends Object, ServerCommonPacketListener, ServerPingPacketListener{
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
    handleCookieResponse(packet: ServerboundCookieResponsePacket): void;
    handleCustomClickAction(packet: ServerboundCustomClickActionPacket): void;
    handleCustomCommandSuggestions(packet: ServerboundCommandSuggestionPacket): void;
    handleCustomPayload(packet: ServerboundCustomPayloadPacket): void;
    handleDebugSubscriptionRequest(packet: ServerboundDebugSubscriptionRequestPacket): void;
    handleEditBook(packet: ServerboundEditBookPacket): void;
    handleEntityTagQuery(packet: ServerboundEntityTagQueryPacket): void;
    handleInteract(packet: ServerboundInteractPacket): void;
    handleJigsawGenerate(packet: ServerboundJigsawGeneratePacket): void;
    handleKeepAlive(packet: ServerboundKeepAlivePacket): void;
    handleLockDifficulty(packet: ServerboundLockDifficultyPacket): void;
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
    handlePong(serverboundPongPacket: ServerboundPongPacket): void;
    handleRecipeBookChangeSettingsPacket(packet: ServerboundRecipeBookChangeSettingsPacket): void;
    handleRecipeBookSeenRecipePacket(packet: ServerboundRecipeBookSeenRecipePacket): void;
    handleRenameItem(packet: ServerboundRenameItemPacket): void;
    handleResourcePackResponse(packet: ServerboundResourcePackPacket): void;
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
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
}