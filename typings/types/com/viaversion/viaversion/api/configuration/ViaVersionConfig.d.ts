import type { Config } from '../../../../../com/viaversion/viaversion/api/configuration/Config.d.ts'
import type { RateLimitConfig } from '../../../../../com/viaversion/viaversion/api/configuration/RateLimitConfig.d.ts'
import type { WorldIdentifiers } from '../../../../../com/viaversion/viaversion/api/minecraft/WorldIdentifiers.d.ts'
import type { BlockedProtocolVersions } from '../../../../../com/viaversion/viaversion/api/protocol/version/BlockedProtocolVersions.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ViaVersionConfig extends Config, Object{
    blockedProtocolVersions(): BlockedProtocolVersions;
    cache1_17Light(): boolean;
    cancelBlockSounds(): boolean;
    cancelSwingInInventory(): boolean;
    enforceSecureChat(): boolean;
    fix1_21PlacementRotation(): boolean;
    get1_13TabCompleteDelay(): number;
    get1_16WorldNamesMap(): WorldIdentifiers;
    get1_17ResourcePackPrompt(): JsonElement;
    getBlockConnectionMethod(): string;
    getBlockedDisconnectMsg(): string;
    getHologramYOffset(): number;
    getMaxPPS(): number;
    getMaxPPSKickMessage(): string;
    getMaxWarnings(): number;
    getMaxWarningsKickMessage(): string;
    getPacketSizeTrackerConfig(): RateLimitConfig;
    getPacketTrackerConfig(): RateLimitConfig;
    getPistonReplacementId(): number;
    getReloadDisconnectMsg(): string;
    getTrackingPeriod(): number;
    getWarningPPS(): number;
    handleInvalidItemCount(): boolean;
    hideScoreboardNumbers(): boolean;
    is1_12QuickMoveActionFix(): boolean;
    is1_13TeamColourFix(): boolean;
    is1_14HealthNaNFix(): boolean;
    is1_14HitboxFix(): boolean;
    is1_15InstantRespawn(): boolean;
    is1_9HitboxFix(): boolean;
    isArmorToggleFix(): boolean;
    isAutoTeam(): boolean;
    isBossbarAntiflicker(): boolean;
    isBossbarPatch(): boolean;
    isCheckForUpdates(): boolean;
    isChunkBorderFix(): boolean;
    isDisable1_13AutoComplete(): boolean;
    isForcedUse1_17ResourcePack(): boolean;
    isHologramPatch(): boolean;
    isIgnoreLong1_16ChannelNames(): boolean;
    isInfestedBlocksFix(): boolean;
    isItemCache(): boolean;
    isLeftHandedHandling(): boolean;
    isMultiReddustColorFix(): boolean;
    isNMSPlayerTicking(): boolean;
    isNewEffectIndicator(): boolean;
    isNoDelayShieldBlocking(): boolean;
    isNonFullBlockLightFix(): boolean;
    isPistonAnimationPatch(): boolean;
    isPreventCollision(): boolean;
    isReduceBlockStorageMemory(): boolean;
    isReplacePistons(): boolean;
    isSendSupportedVersions(): boolean;
    isServersideBlockConnections(): boolean;
    isShieldBlocking(): boolean;
    isShowNewDeathMessages(): boolean;
    isShowShieldWhenSwordInHand(): boolean;
    isSimulatePlayerTick(): boolean;
    isSnowCollisionFix(): boolean;
    isStemWhenBlockAbove(): boolean;
    isSuppressConversionWarnings(): boolean;
    isSuppressMetadataErrors(): boolean;
    isSuppressTextComponentConversionWarnings(): boolean;
    isTruncate1_14Books(): boolean;
    isVineClimbFix(): boolean;
    logBlockedJoins(): boolean;
    logEntityDataErrors(): boolean;
    logOtherConversionWarnings(): boolean;
    logTextComponentConversionErrors(): boolean;
    maxErrorLength(): number;
    reload(): void;
    save(): void;
    sendPlayerDetails(): boolean;
    sendServerDetails(): boolean;
    set(arg0: string, arg1: Object): void;
    setCheckForUpdates(arg0: boolean): void;
    shouldRegisterUserConnectionOnJoin(): boolean;
    translateOcelotToCat(): boolean;
    use1_8HitboxMargin(): boolean;
}