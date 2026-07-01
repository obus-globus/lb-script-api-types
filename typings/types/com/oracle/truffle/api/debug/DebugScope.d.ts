import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SuspendedEvent } from '../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugScope extends Object {
    constructor(scope: Object, session: DebuggerSession, event: SuspendedEvent, node: Node, frame: Frame, root: RootNode)
    constructor(scope: Object, session: DebuggerSession, language: LanguageInfo)
    // private event: SuspendedEvent;
    // private frame: Frame;
    // private language: LanguageInfo;
    // private node: Node;
    readonly parent: DebugScope;
    // private root: RootNode;
    // private scope: Object;
    // private session: DebuggerSession;
    // private variables: (Object | null)[];
    convertRawValue(languageClass: Class<TruffleLanguage<Object>>, rawValue: Object): DebugValue;
    getArguments(): DebugValue[];
    getDeclaredValue(name: string): DebugValue;
    getDeclaredValues(): DebugValue[];
    getLanguage(): LanguageInfo;
    getName(): string;
    getParent(): DebugScope;
    getReceiver(): DebugValue;
    getRoot(): RootNode;
    getRootInstance(): DebugValue;
    // private getRootSourceSection(): SourceSection;
    getSourceSection(): SourceSection;
    // private getVariables(): (Object | null)[];
    // private isDeclaredInScope(name: string): boolean;
    isFunctionScope(): boolean;
    verifyValidState(): void;
}