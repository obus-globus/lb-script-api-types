import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationEngine$Configuration extends Object {
    constructor()
    callGroupSize: number;
    connectionGroupSize: number;
    connectors: EngineConnectorConfig[];
    readonly parallelism: number;
    shutdownGracePeriod: number;
    shutdownTimeout: number;
    workerGroupSize: number;
    takeFrom(other: ApplicationEngine$Configuration): void;
}