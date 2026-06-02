import type { RootCallTarget } from '../../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { DebugException } from '../../../../../com/oracle/truffle/api/debug/DebugException.d.ts'
import type { DebugScope } from '../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { SuspendedContext } from '../../../../../com/oracle/truffle/api/debug/SuspendedContext.d.ts'
import type { SuspendedEvent } from '../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { FrameInstance$FrameAccess } from '../../../../../com/oracle/truffle/api/frame/FrameInstance$FrameAccess.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugStackFrame extends Object {
    constructor(session: SuspendedEvent, instance: FrameInstance, depth: number)
    constructor(session: SuspendedEvent, hostElement: StackTraceElement, depth: number)
    // private currentFrame: FrameInstance;
    // private depth: number;
    // private event: SuspendedEvent;
    readonly hostTraceElement: StackTraceElement;
    readonly name: string;
    // private nameEx: DebugException;
    equals(obj: Object | null): boolean;
    eval(code: string): DebugValue;
    findCurrentRoot(): RootNode;
    findTruffleFrame(access: FrameInstance$FrameAccess): Frame;
    getCallTarget(): RootCallTarget;
    // private getContext(): SuspendedContext;
    getCurrentNode(): Node;
    getDepth(): number;
    getHostTraceElement(): StackTraceElement;
    getLanguage(): LanguageInfo;
    getName(): string;
    getRawFrame(languageClass: Class<TruffleLanguage<Object>>, access: FrameInstance$FrameAccess): Frame;
    getRawNode(languageClass: Class<TruffleLanguage<Object>>): Node;
    getScope(): DebugScope;
    getSourceSection(): SourceSection;
    hashCode(): number;
    // private initName(): string;
    // private isEnterScope(): boolean;
    isHost(): boolean;
    isInternal(): boolean;
    verifyValidState(allowDifferentThread: boolean): void;
    wrapHeapValue(result: Object): DebugValue;
}