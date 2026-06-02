import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { EventObject } from '../../java/util/EventObject.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class PropertyChangeEvent extends EventObject {
    constructor(arg0: Object, arg1: string, arg2: Object, arg3: Object)
    readonly newValue: Object;
    readonly oldValue: Object;
    readonly propagationId: Object;
    readonly propertyName: string;
    appendTo(arg0: StringBuilder): void;
    getNewValue(): Object;
    getOldValue(): Object;
    getPropagationId(): Object;
    getPropertyName(): string;
    setPropagationId(arg0: Object): void;
    toString(): string;
}