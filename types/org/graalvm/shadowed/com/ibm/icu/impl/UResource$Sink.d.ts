import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export abstract class UResource$Sink extends Object {
    constructor()
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}