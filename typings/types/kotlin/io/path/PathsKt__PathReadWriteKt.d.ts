import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class PathsKt__PathReadWriteKt extends Object {
    static appendText(paramarg0: Path, paramarg1: CharSequence, paramarg2: Charset): void;
    static readText(paramarg0: Path, paramarg1: Charset): string;
    static writeText(paramarg0: Path, paramarg1: CharSequence, paramarg2: Charset, ...paramarg3: OpenOption[]): void;
}