import type { URI } from '../../../java/net/URI.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CommonLinks extends Object {
    static ACCESSIBILITY_HELP: URI;
    static ACCOUNT_SETTINGS: URI;
    static ATTRIBUTION: URI;
    static BLOCKING_HELP: URI;
    static BUY_MINECRAFT_JAVA: URI;
    static BUY_REALMS: URI;
    static EULA: URI;
    static EXTEND_REALMS_LINK: string;
    static GDPR: URI;
    static GENERAL_HELP: URI;
    static INTENTIONAL_GAME_DESIGN_BUG: URI;
    static INTENTIONAL_GAME_DESIGN_BUG_ID: string;
    static LICENSES: URI;
    static PRIVACY_STATEMENT: URI;
    static REALMS_CONTENT_CREATION: URI;
    static REALMS_TERMS: URI;
    static RELEASE_FEEDBACK: URI;
    static REPORTING_HELP: URI;
    static SNAPSHOT_BUGS_FEEDBACK: URI;
    static SNAPSHOT_FEEDBACK: URI;
    static START_REALMS_TRIAL: URI;
    static SUSPENSION_HELP: URI;
    static SYMLINK_HELP: URI;
    static extendRealms(paramsubscriptionId: string, paramprofileId: UUID): string;
    static extendRealms(paramsubscriptionId: string, paramprofileId: UUID, paramtrial: boolean): string;
    constructor()
}