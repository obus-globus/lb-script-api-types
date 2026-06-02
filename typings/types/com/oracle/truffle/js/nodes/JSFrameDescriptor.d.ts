import type { Scope } from '../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { FrameSlotKind } from '../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { JSFrameDescriptor$ScopedIdentifier } from '../../../../../com/oracle/truffle/js/nodes/JSFrameDescriptor$ScopedIdentifier.d.ts'
import type { JSFrameSlot } from '../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class JSFrameDescriptor extends Object {
    static scopedIdentifier(paramidentifier: Object, paramscope: Scope): JSFrameDescriptor$ScopedIdentifier;
    constructor()
    constructor(defaultValue: Object)
    // private defaultValue: Object;
    // private frameDescriptor: FrameDescriptor;
    // private identifierToSlotMap: EconomicMap<Object, JSFrameSlot>;
    readonly size: number;
    addFrameSlot(identifier: Object): JSFrameSlot;
    addFrameSlot(identifier: Object, kind: FrameSlotKind): JSFrameSlot;
    addFrameSlot(identifier: Object, flags: number, kind: FrameSlotKind): JSFrameSlot;
    contains(identifier: Object): boolean;
    findFrameSlot(identifier: Object): JSFrameSlot;
    findOrAddFrameSlot(identifier: Object): JSFrameSlot;
    findOrAddFrameSlot(identifier: Object, kind: FrameSlotKind): JSFrameSlot;
    findOrAddFrameSlot(identifier: Object, flags: number, kind: FrameSlotKind): JSFrameSlot;
    getIdentifiers(): Object[];
    getSize(): number;
    getSlots(): JSFrameSlot[];
    isClosed(): boolean;
    toFrameDescriptor(): FrameDescriptor;
    toString(): string;
}