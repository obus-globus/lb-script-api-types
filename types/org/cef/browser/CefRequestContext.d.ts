import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefRequestContextHandler } from '../../../org/cef/handler/CefRequestContextHandler.d.ts'
export abstract class CefRequestContext extends Object {
    static createContext(paramarg0: CefRequestContextHandler): CefRequestContext;
    static getGlobalContext(): CefRequestContext;
    constructor()
    canSetPreference(arg0: string): boolean;
    dispose(): void;
    getAllPreferences(arg0: boolean): { [key: string]: Object };
    getHandler(): CefRequestContextHandler;
    getPreference(arg0: string): Object;
    hasPreference(arg0: string): boolean;
    isGlobal(): boolean;
    setPreference(arg0: string, arg1: Object): string;
}