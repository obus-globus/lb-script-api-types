import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultNodeExports$DefaultScope extends Object implements TruffleObject {
    static isInstance(paramobj: TruffleObject): boolean;
    private constructor(slots: JavaMap<string, Object>, root: RootNode, frame: Frame, language: Class<TruffleLanguage<Object>>)
    // private frame: Frame;
    // private language: Class<TruffleLanguage<Object>>;
    // private root: RootNode;
    // private slots: JavaMap<string, Object>;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getMembers(includeInternal: boolean): Object;
    getSourceLocation(): SourceSection;
    hasLanguage(): boolean;
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