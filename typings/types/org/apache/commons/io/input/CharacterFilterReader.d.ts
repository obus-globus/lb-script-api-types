import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AbstractCharacterFilterReader } from '../../../../../org/apache/commons/io/input/AbstractCharacterFilterReader.d.ts'
export class CharacterFilterReader extends AbstractCharacterFilterReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader, arg1: (param0: number) => kotlin.Boolean)
    constructor(arg0: Reader, arg1: number)
}