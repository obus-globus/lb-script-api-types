import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { Command } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Command.d.ts'
import type { Params } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { DebuggerDomain } from '../../../../../../com/oracle/truffle/tools/chromeinspector/domains/DebuggerDomain.d.ts'
import type { Domain } from '../../../../../../com/oracle/truffle/tools/chromeinspector/domains/Domain.d.ts'
import type { ProfilerDomain } from '../../../../../../com/oracle/truffle/tools/chromeinspector/domains/ProfilerDomain.d.ts'
import type { RuntimeDomain } from '../../../../../../com/oracle/truffle/tools/chromeinspector/domains/RuntimeDomain.d.ts'
import type { ConnectionWatcher } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { InspectServerSession$CommandPostProcessor } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession$CommandPostProcessor.d.ts'
import type { InspectServerSession$CommandProcessThread } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession$CommandProcessThread.d.ts'
import type { JSONMessageListener } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/JSONMessageListener.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ReadWriteLock } from '../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MessageEndpoint } from '../../../../../../org/graalvm/polyglot/io/MessageEndpoint.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class InspectServerSession extends Object implements MessageEndpoint {
    static create(paramcontext: InspectorExecutionContext, paramdebugBreak: boolean, paramconnectionWatcher: ConnectionWatcher, paramsessionDisposal: () => void): InspectServerSession;
    private constructor(runtime: RuntimeDomain, debugger_: DebuggerDomain, profiler: ProfilerDomain, context: InspectorExecutionContext, domainLock: ReadWriteLock)
    // private context: InspectorExecutionContext;
    readonly debugger: DebuggerDomain;
    // private domainLock: ReadWriteLock;
    // private jsonMessageListener: JSONMessageListener;
    // private messageEndpoint: MessageEndpoint;
    // private onClose: () => void;
    // private processThread: InspectServerSession$CommandProcessThread;
    // private profiler: ProfilerDomain;
    // private runtime: RuntimeDomain;
    clearMessageEndpoint(): void;
    consoleAPICall(type: string, text: Object): void;
    dispose(): void;
    // private doProcessCommand(cmd: Command, postProcessor: InspectServerSession$CommandPostProcessor): Params;
    getDebugger(): DebuggerDomain;
    // private getDomain(name: string): Domain;
    isClosed(): boolean;
    notifyClosing(): void;
    onClose(onCloseTask: () => void): void;
    open(messageListener: JSONMessageListener): void;
    open(messageListener: MessageEndpoint): void;
    // private processCommand(cmd: Command, postProcessor: InspectServerSession$CommandPostProcessor): JSONObject;
    sendBinary(data: ByteBuffer): void;
    sendClose(): void;
    sendCommand(cmd: Command): void;
    // private sendCommandSync(cmd: Command): void;
    sendPing(data: ByteBuffer): void;
    sendPong(data: ByteBuffer): void;
    sendText(message: string): void;
    // private startUp(): void;
}