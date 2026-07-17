import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class FrameExtensions extends Object {
    constructor()
    clear(frame: Frame, slot: number): void;
    copy(frame: Frame, srcSlot: number, dstSlot: number): void;
    copyTo(srcFrame: Frame, srcOffset: number, dstFrame: Frame, dstOffset: number, length: number): void;
    expectBoolean(frame: Frame, slot: number): boolean;
    expectByte(frame: Frame, slot: number): number;
    expectDouble(frame: Frame, slot: number): number;
    expectFloat(frame: Frame, slot: number): number;
    expectInt(frame: Frame, slot: number): number;
    expectLong(frame: Frame, slot: number): number;
    expectObject(frame: Frame, slot: number): Object;
    getObject(frame: Frame, slot: number): Object;
    getTag(frame: Frame, slot: number): number;
    getValue(frame: Frame, slot: number): Object;
    requireObject(frame: Frame, slot: number): Object;
    resetFrame(frame: Frame): void;
    setBoolean(frame: Frame, slot: number, value: boolean): void;
    setBooleanOrObject(frame: Frame, slot: number, value: Object): void;
    setByte(frame: Frame, slot: number, value: number): void;
    setByteOrObject(frame: Frame, slot: number, value: Object): void;
    setDouble(frame: Frame, slot: number, value: number): void;
    setDoubleOrObject(frame: Frame, slot: number, value: Object): void;
    setFloat(frame: Frame, slot: number, value: number): void;
    setFloatOrObject(frame: Frame, slot: number, value: Object): void;
    setInt(frame: Frame, slot: number, value: number): void;
    setIntOrObject(frame: Frame, slot: number, value: Object): void;
    setLong(frame: Frame, slot: number, value: number): void;
    setLongOrObject(frame: Frame, slot: number, value: Object): void;
    setObject(frame: Frame, slot: number, value: Object): void;
    uncheckedGetObject(frame: Frame, slot: number): Object;
}