import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
import type { CefSchemeRegistrar } from '../../../org/cef/callback/CefSchemeRegistrar.d.ts'
export class CefSchemeRegistrar_N extends CefNativeAdapter implements CefSchemeRegistrar {
    constructor()
    // private N_AddCustomScheme(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): boolean;
    addCustomScheme(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): boolean;
}