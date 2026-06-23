import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FileRelation extends Object {
    forFile(fileName: string): (param0: Path[][]) => Path[][][];
    getPaths(basePath: Path[]): Path[][];
    join(relations: (param0: Path[][]) => Path[][][][]): (param0: Path[][]) => Path[][][];
    resolve(other: (param0: Path[][]) => Path[][][]): (param0: Path[][]) => Path[][][];
}