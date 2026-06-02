import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { RoutePlanner$ConnectResult } from '../../../okhttp3/internal/connection/RoutePlanner$ConnectResult.d.ts'
import type { RoutePlanner$Plan } from '../../../okhttp3/internal/connection/RoutePlanner$Plan.d.ts'
export class FailedPlan extends Object implements RoutePlanner$Plan {
    constructor(e: Throwable)
    // private isReady: boolean;
    /*not mapped: */ isReady(): boolean;
    readonly result: RoutePlanner$ConnectResult;
    cancel(): void;
    connectTcp(): RoutePlanner$ConnectResult;
    connectTlsEtc(): RoutePlanner$ConnectResult;
    handleSuccess(): void;
    retry(): void;
}