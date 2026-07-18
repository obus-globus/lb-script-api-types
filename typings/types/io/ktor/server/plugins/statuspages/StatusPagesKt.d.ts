import type { ApplicationPlugin } from '../../../../../io/ktor/server/application/ApplicationPlugin.d.ts'
import type { StatusPagesConfig } from '../../../../../io/ktor/server/plugins/statuspages/StatusPagesConfig.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StatusPagesKt extends Object {
    static getStatusPages(): ApplicationPlugin<StatusPagesConfig>;
}