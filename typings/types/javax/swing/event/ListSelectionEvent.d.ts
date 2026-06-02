import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ListSelectionEvent extends EventObject {
    constructor(arg0: Object, arg1: number, arg2: number, arg3: boolean)
    readonly firstIndex: number;
    // private isAdjusting: boolean;
    readonly lastIndex: number;
    getFirstIndex(): number;
    getLastIndex(): number;
    getValueIsAdjusting(): boolean;
    toString(): string;
}