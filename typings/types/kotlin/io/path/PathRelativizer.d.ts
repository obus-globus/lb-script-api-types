import type { Object } from '../../../java/lang/Object.d.ts'
export class PathRelativizer extends Object {
    static INSTANCE: PathRelativizer;
    // private emptyPath: Path[];
    // private parentPath: Path[];
    tryRelativeTo(path: Path[][], base: Path[][]): Path[][];
}