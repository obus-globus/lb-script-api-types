import type { Wbemcli$IWbemServices } from '../../../../../../com/sun/jna/platform/win32/COM/Wbemcli$IWbemServices.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WbemcliUtil extends Object {
    static DEFAULT_NAMESPACE: string;
    static INSTANCE: WbemcliUtil;
    static connectServer(paramarg0: string): Wbemcli$IWbemServices;
    static hasNamespace(paramarg0: string): boolean;
    constructor()
}