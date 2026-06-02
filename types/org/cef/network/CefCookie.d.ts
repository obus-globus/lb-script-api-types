import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CefCookie extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean, arg5: boolean, arg6: Date, arg7: Date, arg8: boolean, arg9: Date)
    creation: Date;
    domain: string;
    expires: Date;
    hasExpires: boolean;
    httponly: boolean;
    lastAccess: Date;
    name: string;
    path: string;
    secure: boolean;
    value: string;
}