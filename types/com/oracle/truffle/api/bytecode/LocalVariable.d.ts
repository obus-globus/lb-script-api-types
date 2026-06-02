import type { FrameSlotKind } from '../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LocalVariable extends Object {
    constructor(token: Object)
    getEndIndex(): number;
    getInfo(): Object;
    getLocalIndex(): number;
    getLocalOffset(): number;
    getName(): Object;
    getStartIndex(): number;
    getTypeProfile(): FrameSlotKind;
    toString(): string;
}