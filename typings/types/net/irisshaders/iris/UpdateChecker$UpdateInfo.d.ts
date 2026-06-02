import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UpdateChecker$UpdateInfo extends Object {
    constructor()
    installer: URI;
    modDownload: URI;
    modHost: string;
    semanticVersion: string;
    updateInfo: { [key: string]: string };
}