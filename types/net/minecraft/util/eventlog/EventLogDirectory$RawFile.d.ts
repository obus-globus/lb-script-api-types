import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { FileChannel } from '../../../../java/nio/channels/FileChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EventLogDirectory$CompressedFile } from '../../../../net/minecraft/util/eventlog/EventLogDirectory$CompressedFile.d.ts'
import type { EventLogDirectory$File } from '../../../../net/minecraft/util/eventlog/EventLogDirectory$File.d.ts'
import type { EventLogDirectory$FileId } from '../../../../net/minecraft/util/eventlog/EventLogDirectory$FileId.d.ts'
export class EventLogDirectory$RawFile extends Record implements EventLogDirectory$File {
    constructor(path: Path[], id: EventLogDirectory$FileId)
    // private id: EventLogDirectory$FileId;
    // private path: Path[];
    compress(): EventLogDirectory$CompressedFile;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): EventLogDirectory$FileId;
    openChannel(): FileChannel;
    openReader(): Reader;
    path(): Path[];
    toString(): string;
}