import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpClientUpgradeHandler$UpgradeEvent extends Enum<HttpClientUpgradeHandler$UpgradeEvent> {
    static UPGRADE_ISSUED: HttpClientUpgradeHandler$UpgradeEvent;
    static UPGRADE_REJECTED: HttpClientUpgradeHandler$UpgradeEvent;
    static UPGRADE_SUCCESSFUL: HttpClientUpgradeHandler$UpgradeEvent;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HttpClientUpgradeHandler$UpgradeEvent;
    static values(): HttpClientUpgradeHandler$UpgradeEvent[];
    private constructor()
    name(): "UPGRADE_ISSUED" | "UPGRADE_SUCCESSFUL" | "UPGRADE_REJECTED";
}