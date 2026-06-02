import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SourceWrapper extends Object {
    constructor(source: Source)
    readonly parsingSuccessful: boolean;
    readonly source: Source;
    getSource(): Source;
    isParsingSuccessful(): boolean;
    setParsingSuccessful(parsingSuccessful: boolean): void;
    setSource(source: Source): void;
}