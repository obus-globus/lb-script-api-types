import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { ValueObject } from '../../../../com/mojang/realmsclient/dto/ValueObject.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { ZonedDateTime } from '../../../../java/time/ZonedDateTime.d.ts'
export class Backup extends ValueObject {
    static parse(paramnode: JsonElement): Backup;
    private constructor(backupId: string, lastModified: Instant, size: number, metadata: JavaMap<string, string>)
    backupId: string;
    changeList: JavaMap<string, string>;
    lastModified: Instant;
    metadata: JavaMap<string, string>;
    size: number;
    uploadedVersion: boolean;
    lastModifiedDate(): ZonedDateTime;
}