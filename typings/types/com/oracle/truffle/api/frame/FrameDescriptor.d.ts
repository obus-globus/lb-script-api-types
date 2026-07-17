import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { FrameDescriptor$Builder } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor$Builder.d.ts'
import type { FrameSlotKind } from '../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class FrameDescriptor extends Object implements Cloneable {
    static newBuilder(): FrameDescriptor$Builder;
    static newBuilder(paramcapacity: number): FrameDescriptor$Builder;
    constructor()
    constructor(defaultValue: Object)
    // private activeAuxiliarySlotCount: number;
    // private auxiliarySlotCount: number;
    // private auxiliarySlotMap: EconomicMap<Object, number>;
    readonly defaultValue: Object;
    // private descriptorInfo: Object;
    // private disabledAuxiliarySlots: BitSet;
    // private indexedSlotCount: number;
    // private indexedSlotInfos: Object[];
    // private indexedSlotNames: Object[];
    // private indexedSlotTags: number[];
    // private materializeCalled: boolean;
    // private staticMode: number;
    protected clone(): Object;
    copy(): FrameDescriptor;
    disableAuxiliarySlot(key: Object): void;
    findOrAddAuxiliarySlot(key: Object): number;
    getAuxiliarySlots(): JavaMap<Object, number>;
    getDefaultValue(): Object;
    getInfo(): Object;
    getNumberOfAuxiliarySlots(): number;
    getNumberOfSlots(): number;
    getSlotInfo(slot: number): Object;
    getSlotKind(slot: number): FrameSlotKind;
    getSlotName(slot: number): Object;
    // private recalculateAuxiliarySlotSize(): void;
    setSlotKind(slot: number, kind: FrameSlotKind): void;
    toString(): string;
}