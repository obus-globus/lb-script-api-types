import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSSegmenter$Granularity } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenter$Granularity.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSSegmenter$InternalState extends Object {
    constructor()
    // private granularity: JSSegmenter$Granularity;
    // private javaLocale: Locale;
    // private locale: string;
    toResolvedOptionsObject(context: JSContext, realm: JSRealm): JSObject;
}