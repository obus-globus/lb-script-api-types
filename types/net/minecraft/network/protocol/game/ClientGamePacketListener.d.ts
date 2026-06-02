import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { ClientboundAnimatePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAnimatePacket.d.ts'
import type { ClientboundAwardStatsPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAwardStatsPacket.d.ts'
import type { ClientboundBlockChangedAckPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundBlockChangedAckPacket.d.ts'
import type { ClientboundBlockDestructionPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundBlockDestructionPacket.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { ClientboundBlockEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundBlockEventPacket.d.ts'
import type { ClientboundBlockUpdatePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundBlockUpdatePacket.d.ts'
import type { ClientboundBossEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket.d.ts'
import type { ClientboundBundlePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundBundlePacket.d.ts'
import type { ClientboundChangeDifficultyPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundChangeDifficultyPacket.d.ts'
import type { ClientboundChunkBatchFinishedPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundChunkBatchFinishedPacket.d.ts'
import type { ClientboundChunkBatchStartPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundChunkBatchStartPacket.d.ts'
import type { ClientboundChunksBiomesPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundChunksBiomesPacket.d.ts'
import type { ClientboundClearTitlesPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundClearTitlesPacket.d.ts'
import type { ClientboundCommandSuggestionsPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandSuggestionsPacket.d.ts'
import type { ClientboundCommandsPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket.d.ts'
import type { ClientboundContainerClosePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundContainerClosePacket.d.ts'
import type { ClientboundContainerSetContentPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundContainerSetContentPacket.d.ts'
import type { ClientboundContainerSetDataPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundContainerSetDataPacket.d.ts'
import type { ClientboundContainerSetSlotPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundContainerSetSlotPacket.d.ts'
import type { ClientboundCooldownPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundCooldownPacket.d.ts'
import type { ClientboundCustomChatCompletionsPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundCustomChatCompletionsPacket.d.ts'
import type { ClientboundDamageEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundDamageEventPacket.d.ts'
import type { ClientboundDebugBlockValuePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundDebugBlockValuePacket.d.ts'
import type { ClientboundDebugChunkValuePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundDebugChunkValuePacket.d.ts'
import type { ClientboundDebugEntityValuePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundDebugEntityValuePacket.d.ts'
import type { ClientboundDebugEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundDebugEventPacket.d.ts'
import type { ClientboundDebugSamplePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundDebugSamplePacket.d.ts'
import type { ClientboundDeleteChatPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundDeleteChatPacket.d.ts'
import type { ClientboundDisguisedChatPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundDisguisedChatPacket.d.ts'
import type { ClientboundEntityEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundEntityEventPacket.d.ts'
import type { ClientboundEntityPositionSyncPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundEntityPositionSyncPacket.d.ts'
import type { ClientboundExplodePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundExplodePacket.d.ts'
import type { ClientboundForgetLevelChunkPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundForgetLevelChunkPacket.d.ts'
import type { ClientboundGameEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundGameEventPacket.d.ts'
import type { ClientboundGameRuleValuesPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundGameRuleValuesPacket.d.ts'
import type { ClientboundGameTestHighlightPosPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundGameTestHighlightPosPacket.d.ts'
import type { ClientboundHurtAnimationPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundHurtAnimationPacket.d.ts'
import type { ClientboundInitializeBorderPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundInitializeBorderPacket.d.ts'
import type { ClientboundLevelChunkWithLightPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundLevelChunkWithLightPacket.d.ts'
import type { ClientboundLevelEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundLevelEventPacket.d.ts'
import type { ClientboundLevelParticlesPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundLevelParticlesPacket.d.ts'
import type { ClientboundLightUpdatePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundLightUpdatePacket.d.ts'
import type { ClientboundLoginPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundLoginPacket.d.ts'
import type { ClientboundLowDiskSpaceWarningPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundLowDiskSpaceWarningPacket.d.ts'
import type { ClientboundMapItemDataPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundMapItemDataPacket.d.ts'
import type { ClientboundMerchantOffersPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundMerchantOffersPacket.d.ts'
import type { ClientboundMountScreenOpenPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundMountScreenOpenPacket.d.ts'
import type { ClientboundMoveEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundMoveEntityPacket.d.ts'
import type { ClientboundMoveMinecartPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundMoveMinecartPacket.d.ts'
import type { ClientboundMoveVehiclePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundMoveVehiclePacket.d.ts'
import type { ClientboundOpenBookPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundOpenBookPacket.d.ts'
import type { ClientboundOpenScreenPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundOpenScreenPacket.d.ts'
import type { ClientboundOpenSignEditorPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundOpenSignEditorPacket.d.ts'
import type { ClientboundPlaceGhostRecipePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlaceGhostRecipePacket.d.ts'
import type { ClientboundPlayerAbilitiesPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerAbilitiesPacket.d.ts'
import type { ClientboundPlayerChatPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerChatPacket.d.ts'
import type { ClientboundPlayerCombatEndPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerCombatEndPacket.d.ts'
import type { ClientboundPlayerCombatEnterPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerCombatEnterPacket.d.ts'
import type { ClientboundPlayerCombatKillPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerCombatKillPacket.d.ts'
import type { ClientboundPlayerInfoRemovePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoRemovePacket.d.ts'
import type { ClientboundPlayerInfoUpdatePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket.d.ts'
import type { ClientboundPlayerLookAtPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerLookAtPacket.d.ts'
import type { ClientboundPlayerPositionPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerPositionPacket.d.ts'
import type { ClientboundPlayerRotationPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerRotationPacket.d.ts'
import type { ClientboundProjectilePowerPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundProjectilePowerPacket.d.ts'
import type { ClientboundRecipeBookAddPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundRecipeBookAddPacket.d.ts'
import type { ClientboundRecipeBookRemovePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundRecipeBookRemovePacket.d.ts'
import type { ClientboundRecipeBookSettingsPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundRecipeBookSettingsPacket.d.ts'
import type { ClientboundRemoveEntitiesPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundRemoveEntitiesPacket.d.ts'
import type { ClientboundRemoveMobEffectPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundRemoveMobEffectPacket.d.ts'
import type { ClientboundResetScorePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundResetScorePacket.d.ts'
import type { ClientboundRespawnPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundRespawnPacket.d.ts'
import type { ClientboundRotateHeadPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundRotateHeadPacket.d.ts'
import type { ClientboundSectionBlocksUpdatePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSectionBlocksUpdatePacket.d.ts'
import type { ClientboundSelectAdvancementsTabPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSelectAdvancementsTabPacket.d.ts'
import type { ClientboundServerDataPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundServerDataPacket.d.ts'
import type { ClientboundSetActionBarTextPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetActionBarTextPacket.d.ts'
import type { ClientboundSetBorderCenterPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetBorderCenterPacket.d.ts'
import type { ClientboundSetBorderLerpSizePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetBorderLerpSizePacket.d.ts'
import type { ClientboundSetBorderSizePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetBorderSizePacket.d.ts'
import type { ClientboundSetBorderWarningDelayPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetBorderWarningDelayPacket.d.ts'
import type { ClientboundSetBorderWarningDistancePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetBorderWarningDistancePacket.d.ts'
import type { ClientboundSetCameraPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetCameraPacket.d.ts'
import type { ClientboundSetChunkCacheCenterPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetChunkCacheCenterPacket.d.ts'
import type { ClientboundSetChunkCacheRadiusPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetChunkCacheRadiusPacket.d.ts'
import type { ClientboundSetCursorItemPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetCursorItemPacket.d.ts'
import type { ClientboundSetDefaultSpawnPositionPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetDefaultSpawnPositionPacket.d.ts'
import type { ClientboundSetDisplayObjectivePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetDisplayObjectivePacket.d.ts'
import type { ClientboundSetEntityDataPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetEntityDataPacket.d.ts'
import type { ClientboundSetEntityLinkPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetEntityLinkPacket.d.ts'
import type { ClientboundSetEntityMotionPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetEntityMotionPacket.d.ts'
import type { ClientboundSetEquipmentPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetEquipmentPacket.d.ts'
import type { ClientboundSetExperiencePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetExperiencePacket.d.ts'
import type { ClientboundSetHealthPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetHealthPacket.d.ts'
import type { ClientboundSetHeldSlotPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetHeldSlotPacket.d.ts'
import type { ClientboundSetObjectivePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetObjectivePacket.d.ts'
import type { ClientboundSetPassengersPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetPassengersPacket.d.ts'
import type { ClientboundSetPlayerInventoryPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetPlayerInventoryPacket.d.ts'
import type { ClientboundSetPlayerTeamPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetPlayerTeamPacket.d.ts'
import type { ClientboundSetScorePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetScorePacket.d.ts'
import type { ClientboundSetSimulationDistancePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetSimulationDistancePacket.d.ts'
import type { ClientboundSetSubtitleTextPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetSubtitleTextPacket.d.ts'
import type { ClientboundSetTimePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetTimePacket.d.ts'
import type { ClientboundSetTitleTextPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetTitleTextPacket.d.ts'
import type { ClientboundSetTitlesAnimationPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetTitlesAnimationPacket.d.ts'
import type { ClientboundSoundEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSoundEntityPacket.d.ts'
import type { ClientboundSoundPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSoundPacket.d.ts'
import type { ClientboundStartConfigurationPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundStartConfigurationPacket.d.ts'
import type { ClientboundStopSoundPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundStopSoundPacket.d.ts'
import type { ClientboundSystemChatPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundSystemChatPacket.d.ts'
import type { ClientboundTabListPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundTabListPacket.d.ts'
import type { ClientboundTagQueryPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundTagQueryPacket.d.ts'
import type { ClientboundTakeItemEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundTakeItemEntityPacket.d.ts'
import type { ClientboundTeleportEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundTeleportEntityPacket.d.ts'
import type { ClientboundTestInstanceBlockStatus } from '../../../../../net/minecraft/network/protocol/game/ClientboundTestInstanceBlockStatus.d.ts'
import type { ClientboundTickingStatePacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundTickingStatePacket.d.ts'
import type { ClientboundTickingStepPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundTickingStepPacket.d.ts'
import type { ClientboundTrackedWaypointPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundTrackedWaypointPacket.d.ts'
import type { ClientboundUpdateAdvancementsPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundUpdateAdvancementsPacket.d.ts'
import type { ClientboundUpdateAttributesPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundUpdateAttributesPacket.d.ts'
import type { ClientboundUpdateMobEffectPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundUpdateMobEffectPacket.d.ts'
import type { ClientboundUpdateRecipesPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundUpdateRecipesPacket.d.ts'
import type { ClientPongPacketListener } from '../../../../../net/minecraft/network/protocol/ping/ClientPongPacketListener.d.ts'
export interface ClientGamePacketListener extends Object, ClientCommonPacketListener, ClientPongPacketListener{
    handleAddEntity(packet: ClientboundAddEntityPacket): void;
    handleAddObjective(packet: ClientboundSetObjectivePacket): void;
    handleAnimate(packet: ClientboundAnimatePacket): void;
    handleAwardStats(packet: ClientboundAwardStatsPacket): void;
    handleBlockChangedAck(packet: ClientboundBlockChangedAckPacket): void;
    handleBlockDestruction(packet: ClientboundBlockDestructionPacket): void;
    handleBlockEntityData(packet: ClientboundBlockEntityDataPacket): void;
    handleBlockEvent(packet: ClientboundBlockEventPacket): void;
    handleBlockUpdate(packet: ClientboundBlockUpdatePacket): void;
    handleBossUpdate(packet: ClientboundBossEventPacket): void;
    handleBundlePacket(packet: ClientboundBundlePacket): void;
    handleChangeDifficulty(packet: ClientboundChangeDifficultyPacket): void;
    handleChunkBatchFinished(packet: ClientboundChunkBatchFinishedPacket): void;
    handleChunkBatchStart(packet: ClientboundChunkBatchStartPacket): void;
    handleChunkBlocksUpdate(packet: ClientboundSectionBlocksUpdatePacket): void;
    handleChunksBiomes(packet: ClientboundChunksBiomesPacket): void;
    handleCommandSuggestions(packet: ClientboundCommandSuggestionsPacket): void;
    handleCommands(packet: ClientboundCommandsPacket): void;
    handleConfigurationStart(packet: ClientboundStartConfigurationPacket): void;
    handleContainerClose(packet: ClientboundContainerClosePacket): void;
    handleContainerContent(packet: ClientboundContainerSetContentPacket): void;
    handleContainerSetData(packet: ClientboundContainerSetDataPacket): void;
    handleContainerSetSlot(packet: ClientboundContainerSetSlotPacket): void;
    handleCustomChatCompletions(packet: ClientboundCustomChatCompletionsPacket): void;
    handleDamageEvent(packet: ClientboundDamageEventPacket): void;
    handleDebugBlockValue(packet: ClientboundDebugBlockValuePacket): void;
    handleDebugChunkValue(packet: ClientboundDebugChunkValuePacket): void;
    handleDebugEntityValue(packet: ClientboundDebugEntityValuePacket): void;
    handleDebugEvent(packet: ClientboundDebugEventPacket): void;
    handleDebugSample(packet: ClientboundDebugSamplePacket): void;
    handleDeleteChat(packet: ClientboundDeleteChatPacket): void;
    handleDisguisedChat(packet: ClientboundDisguisedChatPacket): void;
    handleEntityEvent(packet: ClientboundEntityEventPacket): void;
    handleEntityLinkPacket(packet: ClientboundSetEntityLinkPacket): void;
    handleEntityPositionSync(packet: ClientboundEntityPositionSyncPacket): void;
    handleExplosion(packet: ClientboundExplodePacket): void;
    handleForgetLevelChunk(packet: ClientboundForgetLevelChunkPacket): void;
    handleGameEvent(packet: ClientboundGameEventPacket): void;
    handleGameRuleValues(packet: ClientboundGameRuleValuesPacket): void;
    handleGameTestHighlightPos(packet: ClientboundGameTestHighlightPosPacket): void;
    handleHurtAnimation(packet: ClientboundHurtAnimationPacket): void;
    handleInitializeBorder(packet: ClientboundInitializeBorderPacket): void;
    handleItemCooldown(packet: ClientboundCooldownPacket): void;
    handleLevelChunkWithLight(packet: ClientboundLevelChunkWithLightPacket): void;
    handleLevelEvent(packet: ClientboundLevelEventPacket): void;
    handleLightUpdatePacket(packet: ClientboundLightUpdatePacket): void;
    handleLogin(packet: ClientboundLoginPacket): void;
    handleLookAt(packet: ClientboundPlayerLookAtPacket): void;
    handleLowDiskSpaceWarning(packet: ClientboundLowDiskSpaceWarningPacket): void;
    handleMapItemData(packet: ClientboundMapItemDataPacket): void;
    handleMerchantOffers(packet: ClientboundMerchantOffersPacket): void;
    handleMinecartAlongTrack(packet: ClientboundMoveMinecartPacket): void;
    handleMountScreenOpen(packet: ClientboundMountScreenOpenPacket): void;
    handleMoveEntity(packet: ClientboundMoveEntityPacket): void;
    handleMovePlayer(packet: ClientboundPlayerPositionPacket): void;
    handleMoveVehicle(packet: ClientboundMoveVehiclePacket): void;
    handleOpenBook(packet: ClientboundOpenBookPacket): void;
    handleOpenScreen(packet: ClientboundOpenScreenPacket): void;
    handleOpenSignEditor(packet: ClientboundOpenSignEditorPacket): void;
    handleParticleEvent(packet: ClientboundLevelParticlesPacket): void;
    handlePlaceRecipe(packet: ClientboundPlaceGhostRecipePacket): void;
    handlePlayerAbilities(packet: ClientboundPlayerAbilitiesPacket): void;
    handlePlayerChat(packet: ClientboundPlayerChatPacket): void;
    handlePlayerCombatEnd(packet: ClientboundPlayerCombatEndPacket): void;
    handlePlayerCombatEnter(packet: ClientboundPlayerCombatEnterPacket): void;
    handlePlayerCombatKill(packet: ClientboundPlayerCombatKillPacket): void;
    handlePlayerInfoRemove(packet: ClientboundPlayerInfoRemovePacket): void;
    handlePlayerInfoUpdate(packet: ClientboundPlayerInfoUpdatePacket): void;
    handleProjectilePowerPacket(packet: ClientboundProjectilePowerPacket): void;
    handleRecipeBookAdd(packet: ClientboundRecipeBookAddPacket): void;
    handleRecipeBookRemove(packet: ClientboundRecipeBookRemovePacket): void;
    handleRecipeBookSettings(packet: ClientboundRecipeBookSettingsPacket): void;
    handleRemoveEntities(packet: ClientboundRemoveEntitiesPacket): void;
    handleRemoveMobEffect(packet: ClientboundRemoveMobEffectPacket): void;
    handleResetScore(packet: ClientboundResetScorePacket): void;
    handleRespawn(packet: ClientboundRespawnPacket): void;
    handleRotateMob(packet: ClientboundRotateHeadPacket): void;
    handleRotatePlayer(packet: ClientboundPlayerRotationPacket): void;
    handleSelectAdvancementsTab(packet: ClientboundSelectAdvancementsTabPacket): void;
    handleServerData(packet: ClientboundServerDataPacket): void;
    handleSetBorderCenter(packet: ClientboundSetBorderCenterPacket): void;
    handleSetBorderLerpSize(packet: ClientboundSetBorderLerpSizePacket): void;
    handleSetBorderSize(packet: ClientboundSetBorderSizePacket): void;
    handleSetBorderWarningDelay(packet: ClientboundSetBorderWarningDelayPacket): void;
    handleSetBorderWarningDistance(packet: ClientboundSetBorderWarningDistancePacket): void;
    handleSetCamera(packet: ClientboundSetCameraPacket): void;
    handleSetChunkCacheCenter(packet: ClientboundSetChunkCacheCenterPacket): void;
    handleSetChunkCacheRadius(packet: ClientboundSetChunkCacheRadiusPacket): void;
    handleSetCursorItem(packet: ClientboundSetCursorItemPacket): void;
    handleSetDisplayObjective(packet: ClientboundSetDisplayObjectivePacket): void;
    handleSetEntityData(packet: ClientboundSetEntityDataPacket): void;
    handleSetEntityMotion(packet: ClientboundSetEntityMotionPacket): void;
    handleSetEntityPassengersPacket(packet: ClientboundSetPassengersPacket): void;
    handleSetEquipment(packet: ClientboundSetEquipmentPacket): void;
    handleSetExperience(packet: ClientboundSetExperiencePacket): void;
    handleSetHealth(packet: ClientboundSetHealthPacket): void;
    handleSetHeldSlot(packet: ClientboundSetHeldSlotPacket): void;
    handleSetPlayerInventory(packet: ClientboundSetPlayerInventoryPacket): void;
    handleSetPlayerTeamPacket(packet: ClientboundSetPlayerTeamPacket): void;
    handleSetScore(packet: ClientboundSetScorePacket): void;
    handleSetSimulationDistance(packet: ClientboundSetSimulationDistancePacket): void;
    handleSetSpawn(packet: ClientboundSetDefaultSpawnPositionPacket): void;
    handleSetTime(packet: ClientboundSetTimePacket): void;
    handleSoundEntityEvent(packet: ClientboundSoundEntityPacket): void;
    handleSoundEvent(packet: ClientboundSoundPacket): void;
    handleStopSoundEvent(packet: ClientboundStopSoundPacket): void;
    handleSystemChat(packet: ClientboundSystemChatPacket): void;
    handleTabListCustomisation(packet: ClientboundTabListPacket): void;
    handleTagQueryPacket(packet: ClientboundTagQueryPacket): void;
    handleTakeItemEntity(packet: ClientboundTakeItemEntityPacket): void;
    handleTeleportEntity(packet: ClientboundTeleportEntityPacket): void;
    handleTestInstanceBlockStatus(packet: ClientboundTestInstanceBlockStatus): void;
    handleTickingState(packet: ClientboundTickingStatePacket): void;
    handleTickingStep(packet: ClientboundTickingStepPacket): void;
    handleTitlesClear(packet: ClientboundClearTitlesPacket): void;
    handleUpdateAdvancementsPacket(packet: ClientboundUpdateAdvancementsPacket): void;
    handleUpdateAttributes(packet: ClientboundUpdateAttributesPacket): void;
    handleUpdateMobEffect(packet: ClientboundUpdateMobEffectPacket): void;
    handleUpdateRecipes(packet: ClientboundUpdateRecipesPacket): void;
    handleWaypoint(packet: ClientboundTrackedWaypointPacket): void;
    protocol(): ConnectionProtocol;
    setActionBarText(packet: ClientboundSetActionBarTextPacket): void;
    setSubtitleText(packet: ClientboundSetSubtitleTextPacket): void;
    setTitleText(packet: ClientboundSetTitleTextPacket): void;
    setTitlesAnimation(packet: ClientboundSetTitlesAnimationPacket): void;
}