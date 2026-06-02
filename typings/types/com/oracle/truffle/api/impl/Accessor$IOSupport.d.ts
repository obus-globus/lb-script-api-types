import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { TruffleProcessBuilder } from '../../../../../com/oracle/truffle/api/io/TruffleProcessBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export abstract class Accessor$IOSupport extends Accessor$Support {
    constructor()
    createProcessBuilder(polylgotLanguageContext: Object, fileSystem: FileSystem, command: string[]): TruffleProcessBuilder;
}