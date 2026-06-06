import type { Object } from '../../../java/lang/Object.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { BufferedSocket } from '../../../okhttp3/internal/connection/BufferedSocket.d.ts'
import type { FlowControlListener } from '../../../okhttp3/internal/http2/FlowControlListener.d.ts'
import type { Http2Connection } from '../../../okhttp3/internal/http2/Http2Connection.d.ts'
import type { Http2Connection$Listener } from '../../../okhttp3/internal/http2/Http2Connection$Listener.d.ts'
import type { PushObserver } from '../../../okhttp3/internal/http2/PushObserver.d.ts'
export class Http2Connection$Builder extends Object {
    constructor(client: boolean, taskRunner: TaskRunner)
    // private client: boolean;
    /*not mapped: */ getClient$okhttp(): boolean;
    connectionName: string;
    /*not mapped: */ getConnectionName$okhttp(): string;
    // private flowControlListener: FlowControlListener;
    /*not mapped: */ getFlowControlListener$okhttp(): FlowControlListener;
    // private listener: Http2Connection$Listener;
    /*not mapped: */ getListener$okhttp(): Http2Connection$Listener;
    // private pingIntervalMillis: number;
    /*not mapped: */ getPingIntervalMillis$okhttp(): number;
    // private pushObserver: PushObserver;
    /*not mapped: */ getPushObserver$okhttp(): PushObserver;
    /*not mapped: */ getSocket$okhttp(): BufferedSocket;
    // private taskRunner: TaskRunner;
    /*not mapped: */ getTaskRunner$okhttp(): TaskRunner;
    build(): Http2Connection;
    flowControlListener(flowControlListener: FlowControlListener): Http2Connection$Builder;
    listener(listener: Http2Connection$Listener): Http2Connection$Builder;
    pingIntervalMillis(pingIntervalMillis: number): Http2Connection$Builder;
    pushObserver(pushObserver: PushObserver): Http2Connection$Builder;
    socket(socket: BufferedSocket, peerName: string): Http2Connection$Builder;
}