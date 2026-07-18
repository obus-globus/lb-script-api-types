import type { ConnectorType } from '../../../../io/ktor/server/engine/ConnectorType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EngineConnectorConfig extends Object{
    readonly host: string;
    readonly port: number;
    readonly type: ConnectorType;
}