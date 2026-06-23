import type { Splitter } from '../../../../com/google/common/base/Splitter.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IndexedAssetSource extends Object {
    static PATH_SPLITTER: Splitter;
    static createIndexFs(paramassetsDirectory: Path[][], paramindex: string): Path[][];
    constructor()
}