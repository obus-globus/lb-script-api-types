import type { RealmsDataFetcher } from '../../../../../com/mojang/realmsclient/gui/RealmsDataFetcher.d.ts'
import type { DataFetcher$Subscription } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher$Subscription.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RealmsNotificationsScreen$DataFetcherConfiguration extends Object{
    initDataFetcher(realmsDataFetcher: RealmsDataFetcher): DataFetcher$Subscription;
    showOldNotifications(): boolean;
}