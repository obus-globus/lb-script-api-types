import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ExceptionsCollector extends Object {
    constructor(limit: number)
    readonly collectedExceptions: Exception[];
    // private limit: number;
    path: Path[][] | null;
    readonly totalExceptions: number;
    collect(exception: Exception): void;
    enterEntry(name: Path[][]): void;
    exitEntry(name: Path[][]): void;
}