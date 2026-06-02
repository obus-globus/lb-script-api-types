import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { DebugScope } from '../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugStackTraceElement extends Object {
    constructor(session: DebuggerSession, traceElement: TruffleStackTraceElement)
    constructor(session: DebuggerSession, hostTraceElement: StackTraceElement)
    readonly hostTraceElement: StackTraceElement;
    // private session: DebuggerSession;
    // private stackTraceElement: StackTraceElement;
    // private traceElement: TruffleStackTraceElement;
    // private findCurrentRoot(): RootNode;
    getHostTraceElement(): StackTraceElement;
    // private getLanguage(): LanguageInfo;
    getName(): string;
    getScope(): DebugScope;
    getSourceSection(): SourceSection;
    // private getSourceSectionImpl(): SourceSection;
    isHost(): boolean;
    isInternal(): boolean;
    toTraceElement(): StackTraceElement;
}