import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { PathsKt__PathReadWriteKt } from '../../../kotlin/io/path/PathsKt__PathReadWriteKt.d.ts'
export class PathsKt__PathRecursiveFunctionsKt extends PathsKt__PathReadWriteKt {
    static appendText(paramarg0: Path[][], paramarg1: CharSequence, paramarg2: Charset): void;
    static checkFileName(paramarg0: Path[][]): void;
    static copyToRecursively(paramarg0: Path[][], paramarg1: Path[][], paramarg2: Function3<Object, Object, Object, Object>, paramarg3: boolean, paramarg4: boolean): Path[][];
    static copyToRecursively(paramarg0: Path[][], paramarg1: Path[][], paramarg2: Function3<Object, Object, Object, Object>, paramarg3: boolean, paramarg4: Function3<Object, Object, Object, Object>): Path[][];
    static deleteRecursively(paramarg0: Path[][]): void;
    static readText(paramarg0: Path[][], paramarg1: Charset): string;
    static writeText(paramarg0: Path[][], paramarg1: CharSequence, paramarg2: Charset, paramarg3: (Object | null)[]): void;
}