import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ListDataEvent extends EventObject {
    static CONTENTS_CHANGED: number;
    static INTERVAL_ADDED: number;
    static INTERVAL_REMOVED: number;
    constructor(arg0: Object, arg1: number, arg2: number, arg3: number)
    readonly index0: number;
    readonly index1: number;
    readonly type: number;
    getIndex0(): number;
    getIndex1(): number;
    getType(): number;
    toString(): string;
}