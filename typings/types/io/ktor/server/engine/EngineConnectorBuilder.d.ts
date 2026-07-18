import type { ConnectorType } from '../../../../io/ktor/server/engine/ConnectorType.d.ts'
import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EngineConnectorBuilder extends Object implements EngineConnectorConfig {
    constructor(type?: ConnectorType)
    host: string;
    port: number;
    readonly type: ConnectorType;
    toString(): string;
}