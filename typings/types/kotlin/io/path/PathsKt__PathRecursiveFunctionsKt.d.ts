import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { CopyActionContext } from '../../../kotlin/io/path/CopyActionContext.d.ts'
import type { CopyActionResult } from '../../../kotlin/io/path/CopyActionResult.d.ts'
import type { OnErrorResult } from '../../../kotlin/io/path/OnErrorResult.d.ts'
import type { PathsKt__PathReadWriteKt } from '../../../kotlin/io/path/PathsKt__PathReadWriteKt.d.ts'
export class PathsKt__PathRecursiveFunctionsKt extends PathsKt__PathReadWriteKt {
    static appendText(self: Path, text: CharSequence, charset: Charset): void;
    static checkFileName(self: Path): void;
    static copyToRecursively(self: Path, target: Path, onError: (param0: Path, param1: Path, param2: Exception) => OnErrorResult, followLinks: boolean, overwrite: boolean): Path;
    static copyToRecursively(self: Path, target: Path, onError: (param0: Path, param1: Path, param2: Exception) => OnErrorResult, followLinks: boolean, copyAction: (param0: CopyActionContext, param1: Path, param2: Path) => CopyActionResult): Path;
    static deleteRecursively(self: Path): void;
    static readText(self: Path, charset: Charset): string;
    static writeText(self: Path, text: CharSequence, charset: Charset, ...options: OpenOption[]): void;
}