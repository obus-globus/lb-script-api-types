import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EventLogDirectory$CompressedFile } from '../../../../net/minecraft/util/eventlog/EventLogDirectory$CompressedFile.d.ts'
import type { EventLogDirectory$FileId } from '../../../../net/minecraft/util/eventlog/EventLogDirectory$FileId.d.ts'
export interface EventLogDirectory$File extends Object{
    compress(): EventLogDirectory$CompressedFile;
    id(): EventLogDirectory$FileId;
    openReader(): Reader;
    path(): Path[];
}