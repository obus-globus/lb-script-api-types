import type { RateLimitConfig } from '../../../../../../com/viaversion/viaversion/api/configuration/RateLimitConfig.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PacketTracker$RateTracker extends Object {
    constructor(arg0: number)
    // private count: number;
    // private history: number[];
    // private historyCount: number;
    // private historyIndex: number;
    // private lastWarning: number;
    // private smoothedRate: number;
    // private warningPeriodStart: number;
    // private warnings: number;
    add(arg0: number): void;
    // private checkTrackedInterval(arg0: UserConnection, arg1: RateLimitConfig): boolean;
    exceedsLimit(arg0: UserConnection, arg1: RateLimitConfig): boolean;
    reset(): void;
    updateRate(arg0: number): void;
}