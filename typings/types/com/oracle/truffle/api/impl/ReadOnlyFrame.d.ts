import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReadOnlyFrame extends Object implements Frame {
    constructor(delegate: Frame)
    // private delegate: Frame;
    clear(slot: number): void;
    clearObjectStatic(slot: number): void;
    clearPrimitiveStatic(slot: number): void;
    clearStatic(slot: number): void;
    copy(srcSlot: number, destSlot: number): void;
    copyObjectStatic(srcSlot: number, destSlot: number): void;
    copyPrimitiveStatic(srcSlot: number, destSlot: number): void;
    copyStatic(srcSlot: number, destSlot: number): void;
    copyTo(sourceOffset: number, destination: Frame, destinationOffset: number, length: number): void;
    copyTo(srcOffset: number, dst: Frame, dstOffset: number, length: number): void;
    expectBoolean(slot: number): boolean;
    expectByte(slot: number): number;
    expectDouble(slot: number): number;
    expectFloat(slot: number): number;
    expectInt(slot: number): number;
    expectLong(slot: number): number;
    expectObject(slot: number): Object;
    getArguments(): Object[];
    getAuxiliarySlot(slot: number): Object;
    getBoolean(slot: number): boolean;
    getBooleanStatic(slot: number): boolean;
    getByte(slot: number): number;
    getByteStatic(slot: number): number;
    getDouble(slot: number): number;
    getDoubleStatic(slot: number): number;
    getFloat(slot: number): number;
    getFloatStatic(slot: number): number;
    getFrameDescriptor(): FrameDescriptor;
    getInt(slot: number): number;
    getIntStatic(slot: number): number;
    getLong(slot: number): number;
    getLongStatic(slot: number): number;
    getObject(slot: number): Object;
    getObjectStatic(slot: number): Object;
    getTag(slot: number): number;
    getValue(slot: number): Object;
    isBoolean(slot: number): boolean;
    isByte(slot: number): boolean;
    isDouble(slot: number): boolean;
    isFloat(slot: number): boolean;
    isInt(slot: number): boolean;
    isLong(slot: number): boolean;
    isObject(slot: number): boolean;
    isStatic(slot: number): boolean;
    materialize(): MaterializedFrame;
    setAuxiliarySlot(slot: number, value: Object): void;
    setBoolean(slot: number, value: boolean): void;
    setBooleanStatic(slot: number, value: boolean): void;
    setByte(slot: number, value: number): void;
    setByteStatic(slot: number, value: number): void;
    setDouble(slot: number, value: number): void;
    setDoubleStatic(slot: number, value: number): void;
    setFloat(slot: number, value: number): void;
    setFloatStatic(slot: number, value: number): void;
    setInt(slot: number, value: number): void;
    setIntStatic(slot: number, value: number): void;
    setLong(slot: number, value: number): void;
    setLongStatic(slot: number, value: number): void;
    setObject(slot: number, value: Object): void;
    setObjectStatic(slot: number, value: Object): void;
    swap(first: number, second: number): void;
    swapObjectStatic(first: number, second: number): void;
    swapPrimitiveStatic(first: number, second: number): void;
    swapStatic(first: number, second: number): void;
}