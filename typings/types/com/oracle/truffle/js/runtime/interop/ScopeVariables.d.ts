import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ScopeMembers } from '../../../../../../com/oracle/truffle/js/runtime/interop/ScopeMembers.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScopeVariables extends Object implements TruffleObject {
    static RECEIVER_MEMBER: TruffleString;
    static create(paramframe: Frame, paramnodeEnter: boolean, paramblockOrRoot: Node, paramfunctionFrame: Frame): ScopeVariables;
    private constructor(frame: Frame, nodeEnter: boolean, blockOrRoot: Node, functionFrame: Frame)
    // private blockOrRoot: Node;
    // private frame: Frame;
    // private functionFrame: Frame;
    // private members: ScopeMembers;
    // private nodeEnter: boolean;
    accepts(cachedNode: Node, cachedNodeEnter: boolean): boolean;
    getLanguageId(): string;
    getMembers(includeInternal: boolean): Object;
    // private getParentFrame(): Frame;
    getScopeParent(): Object;
    getSourceLocation(): SourceSection;
    hasLanguageId(): boolean;
    hasMembers(): boolean;
    hasScopeParent(): boolean;
    hasSourceLocation(): boolean;
    isMemberInsertable(member: string): boolean;
    isScope(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
}