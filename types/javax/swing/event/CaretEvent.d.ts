import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class CaretEvent extends EventObject {
    constructor(arg0: Object)
    getDot(): number;
    getMark(): number;
}