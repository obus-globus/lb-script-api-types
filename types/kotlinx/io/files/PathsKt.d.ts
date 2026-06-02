import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sink } from '../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../kotlinx/io/Source.d.ts'
import type { Path } from '../../../kotlinx/io/files/Path.d.ts'
export class PathsKt extends Object {
    static Path(paramarg0: string, paramarg1: (Object | null)[]): Path;
    static Path(paramarg0: Path, paramarg1: (Object | null)[]): Path;
    static removeTrailingSeparators(paramarg0: string, paramarg1: boolean): string;
    static sinkDeprecated(paramarg0: Path): Sink;
    static sourceDeprecated(paramarg0: Path): Source;
}