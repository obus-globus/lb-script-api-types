import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SourceEventObject extends Object implements TruffleObject {
    constructor(source: Source)
    // private source: Source;
}