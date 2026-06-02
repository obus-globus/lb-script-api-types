import type { RealmsClient } from '../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { RealmsNews } from '../../../../com/mojang/realmsclient/dto/RealmsNews.d.ts'
import type { RealmsNotification } from '../../../../com/mojang/realmsclient/dto/RealmsNotification.d.ts'
import type { RealmsServerPlayerLists } from '../../../../com/mojang/realmsclient/dto/RealmsServerPlayerLists.d.ts'
import type { RealmsDataFetcher$ServerListData } from '../../../../com/mojang/realmsclient/gui/RealmsDataFetcher$ServerListData.d.ts'
import type { RealmsNewsManager } from '../../../../com/mojang/realmsclient/gui/RealmsNewsManager.d.ts'
import type { DataFetcher } from '../../../../com/mojang/realmsclient/gui/task/DataFetcher.d.ts'
import type { DataFetcher$Task } from '../../../../com/mojang/realmsclient/gui/task/DataFetcher$Task.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsDataFetcher extends Object {
    constructor(realmsClient: RealmsClient)
    dataFetcher: DataFetcher;
    newsManager: RealmsNewsManager;
    newsTask: DataFetcher$Task<RealmsNews>;
    notificationsTask: DataFetcher$Task<RealmsNotification[]>;
    onlinePlayersTask: DataFetcher$Task<RealmsServerPlayerLists>;
    pendingInvitesTask: DataFetcher$Task<number>;
    serverListUpdateTask: DataFetcher$Task<RealmsDataFetcher$ServerListData>;
    readonly tasks: DataFetcher$Task<Object>[];
    trialAvailabilityTask: DataFetcher$Task<boolean>;
    getTasks(): DataFetcher$Task<Object>[];
}