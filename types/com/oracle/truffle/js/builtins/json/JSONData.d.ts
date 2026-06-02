import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSONData extends Object {
    constructor(gap: TruffleString, replacerFnObj: Object, replacerList: Object[])
    readonly gap: TruffleString;
    readonly indent: number;
    readonly propertyList: Object[];
    readonly replacerFnObj: Object;
    // private stack: Object[];
    getGap(): TruffleString;
    getIndent(): number;
    getPropertyList(): Object[];
    getReplacerFnObj(): Object;
    popStack(): void;
    pushStack(value: Object): void;
    setIndent(indentCount: number): void;
    stackTooDeep(): boolean;
}