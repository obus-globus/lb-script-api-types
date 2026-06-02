import type { Reader } from '../../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MappingVisitor } from '../../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
export class SrgFileReader extends Object {
    static read(paramarg0: Reader, paramarg1: string, paramarg2: string, paramarg3: MappingVisitor): void;
    static read(paramarg0: Reader, paramarg1: MappingVisitor): void;
    private constructor()
}