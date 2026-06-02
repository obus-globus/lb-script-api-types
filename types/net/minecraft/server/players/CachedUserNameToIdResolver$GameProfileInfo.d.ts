import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
export class CachedUserNameToIdResolver$GameProfileInfo extends Object {
    private constructor(nameAndId: NameAndId, expirationDate: Date)
    // private expirationDate: Date;
    readonly lastAccess: number;
    // private nameAndId: NameAndId;
    expirationDate(): Date;
    lastAccess(): number;
    nameAndId(): NameAndId;
    setLastAccess(currentOperation: number): void;
}