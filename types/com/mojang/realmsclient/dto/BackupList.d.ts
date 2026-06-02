import type { Backup } from '../../../../com/mojang/realmsclient/dto/Backup.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BackupList extends Record {
    static parse(paramjson: string): BackupList;
    constructor(backups: Backup[])
    // private backups: Backup[];
    backups(): Backup[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}