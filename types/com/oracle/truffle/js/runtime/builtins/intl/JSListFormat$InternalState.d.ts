import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter.d.ts'
export class JSListFormat$InternalState extends Object {
    constructor()
    // private javaLocale: Locale;
    // private listFormatter: ListFormatter;
    // private locale: string;
    readonly style: string;
    readonly type: string;
    setStyle(style: string): void;
    setType(type: string): void;
    toResolvedOptionsObject(context: JSContext, realm: JSRealm): JSObject;
}