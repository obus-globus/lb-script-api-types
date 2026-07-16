import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DownloadUtils extends Object {
    static download(paramarg0: string, paramarg1: string): void;
    static download(paramarg0: string, paramarg1: string, paramarg2: Progress): void;
    static download(paramarg0: URL, paramarg1: Path, paramarg2: Progress): void;
    private constructor()
}