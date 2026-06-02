import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class UResource$Sink extends Object {
    constructor()
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}