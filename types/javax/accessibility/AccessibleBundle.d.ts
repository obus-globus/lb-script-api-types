import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class AccessibleBundle extends Object {
    constructor()
    // private defaultResourceBundleName: string;
    // private key: string;
    toDisplayString(): string;
    toDisplayString(arg0: Locale): string;
    toDisplayString(arg0: string, arg1: Locale): string;
    toString(): string;
}