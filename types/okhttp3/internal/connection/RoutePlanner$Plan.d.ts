import type { Object } from '../../../java/lang/Object.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RoutePlanner$ConnectResult } from '../../../okhttp3/internal/connection/RoutePlanner$ConnectResult.d.ts'
export interface RoutePlanner$Plan extends Object{
    /*not mapped: */ isReady(): boolean;
    cancel(): void;
    connectTcp(): RoutePlanner$ConnectResult;
    connectTlsEtc(): RoutePlanner$ConnectResult;
    handleSuccess(): RealConnection;
    retry(): RoutePlanner$Plan | null;
}