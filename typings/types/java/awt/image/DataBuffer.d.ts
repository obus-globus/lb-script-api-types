import type { Object } from '../../../java/lang/Object.d.ts'
import type { StateTrackable$State } from '../../../sun/java2d/StateTrackable$State.d.ts'
import type { StateTrackableDelegate } from '../../../sun/java2d/StateTrackableDelegate.d.ts'
export abstract class DataBuffer extends Object {
    static TYPE_BYTE: number;
    static TYPE_DOUBLE: number;
    static TYPE_FLOAT: number;
    static TYPE_INT: number;
    static TYPE_SHORT: number;
    static TYPE_UNDEFINED: number;
    static TYPE_USHORT: number;
    static getDataTypeSize(paramarg0: number): number;
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number[])
    constructor(arg0: StateTrackable$State, arg1: number, arg2: number)
    constructor(arg0: StateTrackable$State, arg1: number, arg2: number, arg3: number)
    constructor(arg0: StateTrackable$State, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: StateTrackable$State, arg1: number, arg2: number, arg3: number, arg4: number[])
    // private banks: number;
    dataType: number;
    offset: number;
    offsets: number[];
    size: number;
    // private theTrackable: StateTrackableDelegate;
    getDataType(): number;
    getElem(arg0: number): number;
    getElem(arg0: number, arg1: number): number;
    getElemDouble(arg0: number): number;
    getElemDouble(arg0: number, arg1: number): number;
    getElemFloat(arg0: number): number;
    getElemFloat(arg0: number, arg1: number): number;
    getNumBanks(): number;
    getOffset(): number;
    getOffsets(): number[];
    getSize(): number;
    setElem(arg0: number, arg1: number): void;
    setElem(arg0: number, arg1: number, arg2: number): void;
    setElemDouble(arg0: number, arg1: number): void;
    setElemDouble(arg0: number, arg1: number, arg2: number): void;
    setElemFloat(arg0: number, arg1: number): void;
    setElemFloat(arg0: number, arg1: number, arg2: number): void;
}