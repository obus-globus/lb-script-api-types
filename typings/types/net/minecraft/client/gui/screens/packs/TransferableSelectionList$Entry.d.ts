import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { TransferableSelectionList } from '../../../../../../net/minecraft/client/gui/screens/packs/TransferableSelectionList.d.ts'
export abstract class TransferableSelectionList$Entry extends ObjectSelectionList$Entry<TransferableSelectionList$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: TransferableSelectionList)
    getPackId(): string;
    getWidth(): number;
}