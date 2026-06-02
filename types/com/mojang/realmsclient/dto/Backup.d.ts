import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { ValueObject } from '../../../../com/mojang/realmsclient/dto/ValueObject.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { ZonedDateTime } from '../../../../java/time/ZonedDateTime.d.ts'
export class Backup extends ValueObject {
    static parse(paramnode: JsonElement): Backup;
    private constructor(backupId: string, lastModified: Instant, size: number, metadata: { [key: string]: string })
    backupId: string;
    changeList: { [key: string]: string };
    lastModified: Instant;
    metadata: { [key: string]: string };
    size: number;
    uploadedVersion: boolean;
    lastModifiedDate(): ZonedDateTime;
}