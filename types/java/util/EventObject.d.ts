import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class EventObject extends Object implements Serializable {
    constructor(arg0: Object)
    source: Object;
    getSource(): Object;
    toString(): string;
}