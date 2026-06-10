import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class ScriptArray$DefaultIterator extends Object implements Iterator<Object> {
    constructor(null_: ScriptArray$DefaultIterator, arrayObject: JSDynamicObject)
    // private arrayObject: JSDynamicObject;
    // private currentIndex: number;
    forEachRemaining(arg0: (param0: Object) => void): void;
    hasNext(): boolean;
    next(): Object;
    remove(): void;
}