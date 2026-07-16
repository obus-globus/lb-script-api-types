import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ZipUtils extends Object {
    static unzip(paramarg0: InputStream, paramarg1: Path): void;
    static zip(paramarg0: Path, paramarg1: Path, paramarg2: boolean): void;
    private constructor()
}