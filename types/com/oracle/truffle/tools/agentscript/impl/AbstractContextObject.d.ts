import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractContextObject extends Object implements TruffleObject {
    constructor()
    // private name: string;
    // private values: number[];
    getInstrumentedNode(): Node;
    getInstrumentedSourceSection(): SourceSection;
    readMember(member: string): Object;
    // private valuesForContext(): number[];
}