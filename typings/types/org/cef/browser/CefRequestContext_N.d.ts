import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefRequestContext } from '../../../org/cef/browser/CefRequestContext.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefRequestContextHandler } from '../../../org/cef/handler/CefRequestContextHandler.d.ts'
export class CefRequestContext_N extends CefRequestContext implements CefNative {
    static createContext(paramarg0: CefRequestContextHandler): CefRequestContext;
    static getGlobalContext(): CefRequestContext;
    constructor()
    // private N_CefHandle: number;
    readonly handler: CefRequestContextHandler;
    // private N_CanSetPreference(arg0: string): boolean;
    // private N_CefRequestContext_DTOR(): void;
    // private N_GetAllPreferences(arg0: boolean): { [key: string]: Object };
    // private N_GetPreference(arg0: string): Object;
    // private N_HasPreference(arg0: string): boolean;
    // private N_IsGlobal(): boolean;
    // private N_SetPreference(arg0: string, arg1: Object): string;
    canSetPreference(arg0: string): boolean;
    dispose(): void;
    getAllPreferences(arg0: boolean): { [key: string]: Object };
    getHandler(): CefRequestContextHandler;
    getNativeRef(arg0: string): number;
    getPreference(arg0: string): Object;
    hasPreference(arg0: string): boolean;
    isGlobal(): boolean;
    setNativeRef(arg0: string, arg1: number): void;
    setPreference(arg0: string, arg1: Object): string;
}