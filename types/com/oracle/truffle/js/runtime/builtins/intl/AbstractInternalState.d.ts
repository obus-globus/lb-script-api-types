import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractInternalState extends Object {
    constructor()
    // private javaLocale: Locale;
    // private locale: string;
    // private numberingSystem: string;
    resolveLocaleAndNumberingSystem(ctx: JSContext, locales: string[], numberingSystemOpt: string): void;
}