import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pack200$Packer } from '../../../../../../../org/apache/commons/compress/java/util/jar/Pack200$Packer.d.ts'
import type { Pack200$Unpacker } from '../../../../../../../org/apache/commons/compress/java/util/jar/Pack200$Unpacker.d.ts'
export abstract class Pack200 extends Object {
    static newPacker(): Pack200$Packer;
    static newUnpacker(): Pack200$Unpacker;
    private constructor()
}