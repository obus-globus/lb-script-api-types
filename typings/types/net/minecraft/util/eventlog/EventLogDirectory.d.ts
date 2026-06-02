import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EventLogDirectory$File } from '../../../../net/minecraft/util/eventlog/EventLogDirectory$File.d.ts'
import type { EventLogDirectory$RawFile } from '../../../../net/minecraft/util/eventlog/EventLogDirectory$RawFile.d.ts'
export class EventLogDirectory extends Object {
    static open(paramroot: Path[][], paramextension: string): EventLogDirectory;
    private constructor(root: Path[], extension: string)
    // private extension: string;
    // private root: Path[];
    createNewFile(date: LocalDate): EventLogDirectory$RawFile;
    listFiles(): EventLogDirectory$File[];
    // private parseFile(path: Path[]): EventLogDirectory$File;
}