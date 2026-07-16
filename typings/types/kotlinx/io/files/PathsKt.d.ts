import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sink } from '../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../kotlinx/io/Source.d.ts'
import type { Path } from '../../../kotlinx/io/files/Path.d.ts'
export class PathsKt extends Object {
    static Path(base: string, ...parts: string[]): Path;
    static Path(base: Path, ...parts: string[]): Path;
    static removeTrailingSeparators(path: string, isWindows_: boolean): string;
    static sinkDeprecated(self: Path): Sink;
    static sourceDeprecated(self: Path): Source;
}