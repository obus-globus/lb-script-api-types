import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpClientUpgradeHandler$UpgradeEvent extends Enum<HttpClientUpgradeHandler$UpgradeEvent> {
    static UPGRADE_ISSUED: HttpClientUpgradeHandler$UpgradeEvent;
    static UPGRADE_REJECTED: HttpClientUpgradeHandler$UpgradeEvent;
    static UPGRADE_SUCCESSFUL: HttpClientUpgradeHandler$UpgradeEvent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpClientUpgradeHandler$UpgradeEvent;
    static values(): (Object | null)[];
    private constructor()
    name(): "UPGRADE_ISSUED" | "UPGRADE_SUCCESSFUL" | "UPGRADE_REJECTED";
}