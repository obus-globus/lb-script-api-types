import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { InstrumentInfo } from '../../../../../com/oracle/truffle/api/InstrumentInfo.d.ts'
import type { InternalResource } from '../../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { ThreadLocalAction } from '../../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLogger } from '../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { InstrumentationHandler$InstrumentClientInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$InstrumentClientInstrumenter.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { TruffleInstrument } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { ExecutableNode } from '../../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ThreadGroup } from '../../../../../java/lang/ThreadGroup.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionValues } from '../../../../../org/graalvm/options/OptionValues.d.ts'
import type { SandboxPolicy } from '../../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { MessageEndpoint } from '../../../../../org/graalvm/polyglot/io/MessageEndpoint.d.ts'
export class TruffleInstrument$Env extends Object {
    constructor(polyglotInstrument: Object)
    instrumenter: InstrumentationHandler$InstrumentClientInstrumenter;
    options: OptionValues;
    // private polyglotInstrument: Object;
    // private services: Object[];
    calculateContextHeapSize(truffleContext: TruffleContext, stopAtBytes: number, cancelled: AtomicBoolean): number;
    createSystemThread(runnable: () => void): Thread;
    createSystemThread(runnable: () => void, threadGroup: ThreadGroup): Thread;
    err(): OutputStream;
    getEnteredContext(): TruffleContext;
    getInstrumenter(): Instrumenter;
    getInstruments(): { [key: string]: InstrumentInfo };
    getInternalResource(resource: Class<InternalResource>): TruffleFile;
    getInternalResource(resourceId: string): TruffleFile;
    getLanguageInfo(languageClass: Class<TruffleLanguage<Object>>): LanguageInfo;
    getLanguageView(language: LanguageInfo, value: Object): Object;
    getLanguages(): { [key: string]: LanguageInfo };
    getLogger(forClass: Class<Object>): TruffleLogger;
    getLogger(loggerName: string): TruffleLogger;
    getOptions(): OptionValues;
    getOptions(context: TruffleContext): OptionValues;
    getOptions(source: Source): OptionValues;
    getPolyglotBindings(): Object;
    getPolyglotInstrument(): Object;
    getSandboxPolicy(): SandboxPolicy;
    getScope(language: LanguageInfo): Object;
    getTruffleFile(context: TruffleContext, uri: URI): TruffleFile;
    getTruffleFile(context: TruffleContext, path: string): TruffleFile;
    getTruffleFile(uri: URI): TruffleFile;
    getTruffleFile(path: string): TruffleFile;
    in(): InputStream;
    isEngineRoot(root: RootNode): boolean;
    isSameFrame(root: RootNode, frame1: Frame, frame2: Frame): boolean;
    lookup<S extends unknown>(instrument: InstrumentInfo, type: Class<S>): S;
    lookup<S extends unknown>(language: LanguageInfo, type: Class<S>): S;
    onCreate(instrument: TruffleInstrument): Object[];
    out(): OutputStream;
    parse(source: Source, ...argumentNames: string[]): CallTarget;
    parseInline(source: Source, node: Node, frame: MaterializedFrame): ExecutableNode;
    registerService(service: Object): void;
    setAsynchronousStackDepth(depth: number): void;
    startServer(uri: URI, server: MessageEndpoint): MessageEndpoint;
    submitThreadLocal(context: TruffleContext, threads: Thread[], action: ThreadLocalAction): Future<void>;
}