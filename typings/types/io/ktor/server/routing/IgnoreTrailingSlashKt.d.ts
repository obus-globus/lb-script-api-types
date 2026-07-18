import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ApplicationPlugin } from '../../../../io/ktor/server/application/ApplicationPlugin.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IgnoreTrailingSlashKt extends Object {
    static getIgnoreTrailingSlash(paramarg0: ApplicationCall): boolean;
    static getIgnoreTrailingSlash(): ApplicationPlugin<void>;
}