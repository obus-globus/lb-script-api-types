import type { RealmsClient$CompatibleVersionResponse } from '../../../../com/mojang/realmsclient/client/RealmsClient$CompatibleVersionResponse.d.ts'
import type { RealmsClient$Environment } from '../../../../com/mojang/realmsclient/client/RealmsClient$Environment.d.ts'
import type { Request } from '../../../../com/mojang/realmsclient/client/Request.d.ts'
import type { BackupList } from '../../../../com/mojang/realmsclient/dto/BackupList.d.ts'
import type { Ops } from '../../../../com/mojang/realmsclient/dto/Ops.d.ts'
import type { PendingInvite } from '../../../../com/mojang/realmsclient/dto/PendingInvite.d.ts'
import type { PendingInvitesList } from '../../../../com/mojang/realmsclient/dto/PendingInvitesList.d.ts'
import type { PingResult } from '../../../../com/mojang/realmsclient/dto/PingResult.d.ts'
import type { PlayerInfo } from '../../../../com/mojang/realmsclient/dto/PlayerInfo.d.ts'
import type { PreferredRegionsDto } from '../../../../com/mojang/realmsclient/dto/PreferredRegionsDto.d.ts'
import type { RealmsJoinInformation } from '../../../../com/mojang/realmsclient/dto/RealmsJoinInformation.d.ts'
import type { RealmsNews } from '../../../../com/mojang/realmsclient/dto/RealmsNews.d.ts'
import type { RealmsNotification } from '../../../../com/mojang/realmsclient/dto/RealmsNotification.d.ts'
import type { RealmsServer } from '../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsServer$WorldType } from '../../../../com/mojang/realmsclient/dto/RealmsServer$WorldType.d.ts'
import type { RealmsServerList } from '../../../../com/mojang/realmsclient/dto/RealmsServerList.d.ts'
import type { RealmsServerPlayerLists } from '../../../../com/mojang/realmsclient/dto/RealmsServerPlayerLists.d.ts'
import type { RealmsSetting } from '../../../../com/mojang/realmsclient/dto/RealmsSetting.d.ts'
import type { RealmsWorldOptions } from '../../../../com/mojang/realmsclient/dto/RealmsWorldOptions.d.ts'
import type { RegionSelectionPreferenceDto } from '../../../../com/mojang/realmsclient/dto/RegionSelectionPreferenceDto.d.ts'
import type { Subscription } from '../../../../com/mojang/realmsclient/dto/Subscription.d.ts'
import type { UploadInfo } from '../../../../com/mojang/realmsclient/dto/UploadInfo.d.ts'
import type { WorldDownload } from '../../../../com/mojang/realmsclient/dto/WorldDownload.d.ts'
import type { WorldTemplatePaginatedList } from '../../../../com/mojang/realmsclient/dto/WorldTemplatePaginatedList.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
export class RealmsClient extends Object {
    static ENVIRONMENT: RealmsClient$Environment;
    static getOrCreate(): RealmsClient;
    static getOrCreate(paramminecraft: Minecraft): RealmsClient;
    private constructor(sessionId: string, username: string, minecraft: Minecraft)
    readonly featureFlags: CompletableFuture<string[]>;
    // private minecraft: Minecraft;
    // private sessionId: string;
    // private username: string;
    acceptInvitation(invitationId: string): void;
    agreeToTos(): void;
    backupsFor(realmId: number): BackupList;
    clientCompatible(): RealmsClient$CompatibleVersionResponse;
    close(realmId: number): boolean;
    createSnapshotRealm(parentId: number): RealmsServer;
    deleteRealm(realmId: number): void;
    deop(realmId: number, profileId: UUID): Ops;
    // private execute(request: Request<Object>): string;
    // private fetchFeatureFlags(): string[];
    fetchWorldTemplates(page: number, pageSize: number, type: RealmsServer$WorldType): WorldTemplatePaginatedList;
    getFeatureFlags(): string[];
    getLiveStats(): RealmsServerPlayerLists;
    getNews(): RealmsNews;
    getNotifications(): RealmsNotification[];
    getOwnRealm(realmId: number): RealmsServer;
    getPreferredRegionSelections(): PreferredRegionsDto;
    hasParentalConsent(): boolean;
    initializeRealm(realmId: number, name: string, motd: string): void;
    invite(realmId: number, profileName: string): PlayerInfo[];
    // private isBlocked(invite: PendingInvite): boolean;
    join(realmId: number): RealmsJoinInformation;
    listRealms(): RealmsServerList;
    listSnapshotEligibleRealms(): RealmsServer[];
    notificationsDismiss(notificationUuids: UUID[]): void;
    notificationsSeen(notificationUuids: UUID[]): void;
    op(realmId: number, profileId: UUID): Ops;
    open(realmId: number): boolean;
    pendingInvites(): PendingInvitesList;
    pendingInvitesCount(): number;
    putIntoMinigameMode(realmId: number, minigameId: string): boolean;
    rejectInvitation(invitationId: string): void;
    requestDownloadInfo(realmId: number, slotId: number): WorldDownload;
    requestUploadInfo(realmId: number): UploadInfo;
    resetWorldWithTemplate(realmId: number, worldTemplateId: string): boolean;
    restoreWorld(realmId: number, backupId: string): void;
    sendPingResults(pingResult: PingResult): void;
    subscriptionFor(realmId: number): Subscription;
    switchSlot(realmId: number, slot: number): boolean;
    trialAvailable(): boolean;
    uninvite(realmId: number, profileId: UUID): void;
    uninviteMyselfFrom(realmId: number): void;
    updateConfiguration(realmId: number, name: string, description: string, regionSelectionPreference: RegionSelectionPreferenceDto, slotId: number, options: RealmsWorldOptions, settings: RealmsSetting[]): void;
    updateSlot(realmId: number, slotId: number, options: RealmsWorldOptions, settings: RealmsSetting[]): void;
    // private url(path: string): string;
    // private url(path: string, queryString: string): string;
}