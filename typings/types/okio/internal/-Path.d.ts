import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { ByteString } from '../../okio/ByteString.d.ts'
import type { Path } from '../../okio/Path.d.ts'
export class -Path extends Object {
    static commonCompareTo(paramarg0: Path, paramarg1: Path): number;
    static commonEquals(paramarg0: Path, paramarg1: Object): boolean;
    static commonHashCode(paramarg0: Path): number;
    static commonIsAbsolute(paramarg0: Path): boolean;
    static commonIsRelative(paramarg0: Path): boolean;
    static commonIsRoot(paramarg0: Path): boolean;
    static commonName(paramarg0: Path): string;
    static commonNameBytes(paramarg0: Path): ByteString;
    static commonNormalized(paramarg0: Path): Path;
    static commonParent(paramarg0: Path): Path;
    static commonRelativeTo(paramarg0: Path, paramarg1: Path): Path;
    static commonResolve(paramarg0: Path, paramarg1: string, paramarg2: boolean): Path;
    static commonResolve(paramarg0: Path, paramarg1: Buffer, paramarg2: boolean): Path;
    static commonResolve(paramarg0: Path, paramarg1: ByteString, paramarg2: boolean): Path;
    static commonResolve(paramarg0: Path, paramarg1: Path, paramarg2: boolean): Path;
    static commonRoot(paramarg0: Path): Path;
    static commonSegments(paramarg0: Path): string[];
    static commonSegmentsBytes(paramarg0: Path): ByteString[];
    static commonToPath(paramarg0: string, paramarg1: boolean): Path;
    static commonToString(paramarg0: Path): string;
    static commonVolumeLetter(paramarg0: Path): string;
    static toPath(paramarg0: Buffer, paramarg1: boolean): Path;
}