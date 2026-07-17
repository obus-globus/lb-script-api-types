import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultNodeExports$DefaultScope extends Object implements TruffleObject {
    static isInstance(paramobj: TruffleObject): boolean;
    private constructor(slots: { [key: string]: Object }, root: RootNode, frame: Frame, languageId: string)
    // private frame: Frame;
    // private languageId: string;
    // private root: RootNode;
    // private slots: { [key: string]: Object };
    getLanguageId(): string;
    getMembers(includeInternal: boolean): Object;
    getSourceLocation(): SourceSection;
    hasLanguageId(): boolean;
    hasMembers(): boolean;
    hasSourceLocation(): boolean;
    isMemberInsertable(member: string): boolean;
    isMemberModifiable(member: string): boolean;
    isMemberReadable(member: string): boolean;
    isScope(): boolean;
    readMember(member: string): Object;
    toDisplayString(allowSideEffects: boolean): Object;
    writeMember(member: string, value: Object): void;
}