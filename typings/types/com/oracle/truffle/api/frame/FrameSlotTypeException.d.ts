import type { FrameSlotKind } from '../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { IllegalStateException } from '../../../../../java/lang/IllegalStateException.d.ts'
export class FrameSlotTypeException extends IllegalStateException {
    static create(paramslot: number, paramexpectedKind: FrameSlotKind, paramactualKind: FrameSlotKind): FrameSlotTypeException;
    constructor()
    constructor(slot: number, expectedTag: FrameSlotKind, actualTag: FrameSlotKind)
    readonly actualKind: FrameSlotKind;
    readonly expectedKind: FrameSlotKind;
    readonly message: string | null;
    readonly slot: number;
    getActualKind(): FrameSlotKind;
    getExpectedKind(): FrameSlotKind;
    getSlot(): number;
}