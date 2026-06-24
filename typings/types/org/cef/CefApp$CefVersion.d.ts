import type { Object } from '../../java/lang/Object.d.ts'
import type { CefApp } from '../../org/cef/CefApp.d.ts'
export class CefApp$CefVersion extends Object {
    private constructor(null_: CefApp, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number)
    CEF_COMMIT_NUMBER: number;
    CEF_VERSION_MAJOR: number;
    CEF_VERSION_MINOR: number;
    CEF_VERSION_PATCH: number;
    CHROME_VERSION_BUILD: number;
    CHROME_VERSION_MAJOR: number;
    CHROME_VERSION_MINOR: number;
    CHROME_VERSION_PATCH: number;
    JCEF_COMMIT_NUMBER: number;
    getCefVersion(): string;
    getChromeVersion(): string;
    getJcefVersion(): string;
    toString(): string;
}