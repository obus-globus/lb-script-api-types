import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ArchiveEntry extends Object{
    getLastModifiedDate(): Date;
    getName(): string;
    getSize(): number;
    isDirectory(): boolean;
    resolveIn(arg0: Path[]): Path[];
}