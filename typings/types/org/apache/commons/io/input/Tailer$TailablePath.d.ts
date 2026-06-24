import type { Tailer$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { LinkOption } from '../../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tailer$RandomAccessResourceBridge } from '../../../../../org/apache/commons/io/input/Tailer$RandomAccessResourceBridge.d.ts'
import type { Tailer$Tailable } from '../../../../../org/apache/commons/io/input/Tailer$Tailable.d.ts'
export class Tailer$TailablePath extends Object implements Tailer$Tailable {
    private constructor(arg0: Path[], arg1: LinkOption[])
    constructor(arg0: Path[], arg1: LinkOption[], arg2: Tailer$1)
    // private linkOptions: LinkOption[];
    // private path: Path[];
    getPath(): Path[];
    getRandomAccess(arg0: string): Tailer$RandomAccessResourceBridge;
    isNewer(arg0: FileTime): boolean;
    lastModifiedFileTime(): FileTime;
    size(): number;
    toString(): string;
}