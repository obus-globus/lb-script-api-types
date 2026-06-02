import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tailer$RandomAccessResourceBridge } from '../../../../../org/apache/commons/io/input/Tailer$RandomAccessResourceBridge.d.ts'
export interface Tailer$Tailable extends Object{
    getRandomAccess(arg0: string): Tailer$RandomAccessResourceBridge;
    isNewer(arg0: FileTime): boolean;
    lastModifiedFileTime(): FileTime;
    size(): number;
}