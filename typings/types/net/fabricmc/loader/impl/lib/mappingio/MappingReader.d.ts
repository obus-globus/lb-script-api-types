import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MappingVisitor } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingFormat } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/MappingFormat.d.ts'
export class MappingReader extends Object {
    static detectFormat(paramarg0: Reader): MappingFormat;
    static detectFormat(paramarg0: Path): MappingFormat;
    static getNamespaces(paramarg0: Reader): string[];
    static getNamespaces(paramarg0: Reader, paramarg1: MappingFormat): string[];
    static getNamespaces(paramarg0: Path): string[];
    static getNamespaces(paramarg0: Path, paramarg1: MappingFormat): string[];
    static read(paramarg0: Reader, paramarg1: MappingVisitor): void;
    static read(paramarg0: Reader, paramarg1: MappingFormat, paramarg2: MappingVisitor): void;
    static read(paramarg0: Path, paramarg1: MappingVisitor): void;
    static read(paramarg0: Path, paramarg1: MappingFormat, paramarg2: MappingVisitor): void;
}