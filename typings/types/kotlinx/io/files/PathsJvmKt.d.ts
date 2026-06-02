import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sink } from '../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../kotlinx/io/Source.d.ts'
import type { Path } from '../../../kotlinx/io/files/Path.d.ts'
export class PathsJvmKt extends Object {
    static SystemPathSeparator: string;
    static Path(paramarg0: string): Path;
    static sink(paramarg0: Path): Sink;
    static source(paramarg0: Path): Source;
}