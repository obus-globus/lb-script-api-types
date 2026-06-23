import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WriteablePath extends Object {
    constructor(arg0: Path[])
    readonly path: Path[];
    readonly real: Path[];
    getPath(): Path[];
    getReal(): Path[];
    getRealPathText(): string;
}