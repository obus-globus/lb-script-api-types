import type { RealmsPersistence$RealmsPersistenceData } from '../../../../com/mojang/realmsclient/util/RealmsPersistence$RealmsPersistenceData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsPersistence extends Object {
    static readFile(): RealmsPersistence$RealmsPersistenceData;
    static writeFile(paramdata: RealmsPersistence$RealmsPersistenceData): void;
    constructor()
    read(): RealmsPersistence$RealmsPersistenceData;
    save(data: RealmsPersistence$RealmsPersistenceData): void;
}