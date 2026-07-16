import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class PathsKt__PathReadWriteKt extends Object {
    static appendText(self: Path, text: CharSequence, charset: Charset): void;
    static readText(self: Path, charset: Charset): string;
    static writeText(self: Path, text: CharSequence, charset: Charset, ...options: OpenOption[]): void;
}