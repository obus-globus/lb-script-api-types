import type { Accessor$IOSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$IOSupport.d.ts'
import type { TruffleProcessBuilder } from '../../../../../com/oracle/truffle/api/io/TruffleProcessBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class IOAccessor$IOSupportImpl extends Accessor$IOSupport {
    constructor()
    createProcessBuilder(polyglotLanguageContext: Object, fileSystem: FileSystem, command: string[]): TruffleProcessBuilder;
}