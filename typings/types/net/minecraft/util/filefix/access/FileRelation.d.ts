import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FileRelation extends Object {
    forFile(fileName: string): (param0: Path[][]) => kotlin.collections.List<java.nio.file.Path>;
    getPaths(basePath: Path[]): Path[][];
    join(relations: (param0: Path[][]) => kotlin.collections.List<java.nio.file.Path>[]): (param0: Path[][]) => kotlin.collections.List<java.nio.file.Path>;
    resolve(other: (param0: Path[][]) => kotlin.collections.List<java.nio.file.Path>): (param0: Path[][]) => kotlin.collections.List<java.nio.file.Path>;
}