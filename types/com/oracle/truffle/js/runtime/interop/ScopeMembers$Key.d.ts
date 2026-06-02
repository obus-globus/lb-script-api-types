import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScopeMembers$Key extends Object implements TruffleObject {
    constructor(name: TruffleString, blockOrRoot: Node)
    constructor(name: TruffleString, blockOrRoot: Node, slot: number)
    // private blockOrRoot: Node;
    // private name: TruffleString;
    // private slot: number;
    // private sourceLocation: SourceSection;
    asString(): string;
    asTruffleString(): TruffleString;
    // private findSourceLocation(): SourceSection;
    // private getOrFindSourceLocation(): SourceSection;
    getSourceLocation(): SourceSection;
    // private hasSlot(): boolean;
    hasSourceLocation(): boolean;
    isString(): boolean;
    toString(): string;
}