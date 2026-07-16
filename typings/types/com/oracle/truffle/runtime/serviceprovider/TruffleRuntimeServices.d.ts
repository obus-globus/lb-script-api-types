import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleRuntimeServices extends Object {
    static load<S extends unknown>(paramservice: Class<S>): S[];
    constructor()
}