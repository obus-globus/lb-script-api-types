import type { RealmsNews } from '../../../../com/mojang/realmsclient/dto/RealmsNews.d.ts'
import type { RealmsPersistence } from '../../../../com/mojang/realmsclient/util/RealmsPersistence.d.ts'
import type { RealmsPersistence$RealmsPersistenceData } from '../../../../com/mojang/realmsclient/util/RealmsPersistence$RealmsPersistenceData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsNewsManager extends Object {
    constructor(newsLocalStorage: RealmsPersistence)
    // private hasUnreadNews: boolean;
    // private newsLink: string;
    // private newsLocalStorage: RealmsPersistence;
    hasUnreadNews(): boolean;
    newsLink(): string;
    // private updateNewsStorage(newsResponse: RealmsNews): RealmsPersistence$RealmsPersistenceData;
    updateUnreadNews(newsResponse: RealmsNews): void;
}