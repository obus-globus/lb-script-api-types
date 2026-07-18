import type { File } from '../../../java/io/File.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NioPathKt extends Object {
    static combineSafe(self: File, relativePath: Path): File;
    static combineSafe(self: Path, relativePath: Path): Path;
    static normalizeAndRelativize(self: Path): Path;
}