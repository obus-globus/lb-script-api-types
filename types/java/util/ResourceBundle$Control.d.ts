import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ResourceBundle$Control extends Object {
    static FORMAT_CLASS: string[];
    static FORMAT_DEFAULT: string[];
    static FORMAT_PROPERTIES: string[];
    static TTL_DONT_CACHE: number;
    static TTL_NO_EXPIRATION_CONTROL: number;
    static getControl(paramarg0: string[]): ResourceBundle$Control;
    static getNoFallbackControl(paramarg0: string[]): ResourceBundle$Control;
    constructor()
    getCandidateLocales(arg0: string, arg1: Locale): Locale[];
    getFallbackLocale(arg0: string, arg1: Locale): Locale;
    getFormats(arg0: string): string[];
    getTimeToLive(arg0: string, arg1: Locale): number;
    needsReload(arg0: string, arg1: Locale, arg2: string, arg3: ClassLoader, arg4: ResourceBundle, arg5: number): boolean;
    newBundle(arg0: string, arg1: Locale, arg2: string, arg3: ClassLoader, arg4: boolean): ResourceBundle;
    // private newBundle0(arg0: string, arg1: string, arg2: ClassLoader, arg3: boolean): ResourceBundle;
    toBundleName(arg0: string, arg1: Locale): string;
    toResourceName(arg0: string, arg1: string): string;
    // private toResourceName0(arg0: string, arg1: string): string;
}