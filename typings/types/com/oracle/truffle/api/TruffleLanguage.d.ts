import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { ContextLocal } from '../../../../com/oracle/truffle/api/ContextLocal.d.ts'
import type { ContextThreadLocal } from '../../../../com/oracle/truffle/api/ContextThreadLocal.d.ts'
import type { TruffleLanguage$ContextLocalFactory } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextLocalFactory.d.ts'
import type { TruffleLanguage$ContextLocalProvider } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextLocalProvider.d.ts'
import type { TruffleLanguage$ContextThreadLocalFactory } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextThreadLocalFactory.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { TruffleLanguage$ExitMode } from '../../../../com/oracle/truffle/api/TruffleLanguage$ExitMode.d.ts'
import type { TruffleLanguage$InlineParsingRequest } from '../../../../com/oracle/truffle/api/TruffleLanguage$InlineParsingRequest.d.ts'
import type { TruffleLanguage$ParsingRequest } from '../../../../com/oracle/truffle/api/TruffleLanguage$ParsingRequest.d.ts'
import type { MaterializedFrame } from '../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { ExecutableNode } from '../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
export abstract class TruffleLanguage<C extends unknown> extends Object {
    constructor()
    // private languageInfo: LanguageInfo;
    // private locals: TruffleLanguage$ContextLocalProvider<C>;
    // private polyglotLanguageInstance: Object;
    areOptionsCompatible(firstOptions: OptionValues, newOptions: OptionValues): boolean;
    createContext(env: TruffleLanguage$Env): C;
    createContextLocal<T extends unknown>(factory: (param0: C) => T): ContextLocal<T>;
    createContextThreadLocal<T extends unknown>(factory: (param0: C, param1: Thread) => T): ContextThreadLocal<T>;
    disposeContext(context: C): void;
    disposeThread(context: C, thread: Thread): void;
    exitContext(context: C, exitMode: TruffleLanguage$ExitMode, exitCode: number): void;
    finalizeContext(context: C): void;
    finalizeThread(context: C, thread: Thread): void;
    getAsynchronousStackDepth(): number;
    getLanguageHome(): string;
    getLanguageView(context: C, value: Object): Object;
    getOptionDescriptors(): OptionDescriptor[];
    getScope(context: C): Object;
    getSourceOptionDescriptors(): OptionDescriptor[];
    initializeContext(context: C): void;
    initializeMultiThreading(context: C): void;
    initializeMultipleContexts(): void;
    initializeThread(context: C, thread: Thread): void;
    isThreadAccessAllowed(arg0: Thread, arg1: boolean): boolean;
    isVisible(context: C, value: Object): boolean;
    parse(request: TruffleLanguage$InlineParsingRequest): ExecutableNode;
    parse(request: TruffleLanguage$ParsingRequest): CallTarget;
    parse(source: Source, optionValues: OptionValues, ...argumentNames: string[]): CallTarget;
    parseInline(source: Source, optionValues: OptionValues, context: Node, frame: MaterializedFrame): ExecutableNode;
    patchContext(context: C, newEnv: TruffleLanguage$Env): boolean;
}