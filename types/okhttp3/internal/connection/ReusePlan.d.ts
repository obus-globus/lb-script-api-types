import type { Object } from '../../../java/lang/Object.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RoutePlanner$Plan } from '../../../okhttp3/internal/connection/RoutePlanner$Plan.d.ts'
export class ReusePlan extends Object implements RoutePlanner$Plan {
    constructor(connection: RealConnection)
    readonly connection: RealConnection;
    // private isReady: boolean;
    /*not mapped: */ isReady(): boolean;
    cancel(): void;
    connectTcp(): void;
    connectTlsEtc(): void;
    handleSuccess(): RealConnection;
    retry(): void;
}