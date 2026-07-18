import type { ApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/ApplicationEngine$Configuration.d.ts'
import type { EngineConnectorBuilder } from '../../../../io/ktor/server/engine/EngineConnectorBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EngineConnectorConfigKt extends Object {
    static connector(self: ApplicationEngine$Configuration, builder: (param0: EngineConnectorBuilder) => void): void;
}