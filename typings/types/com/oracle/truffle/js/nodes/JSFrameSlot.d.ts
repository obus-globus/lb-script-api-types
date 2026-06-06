import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { FrameSlotKind } from '../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSFrameSlot extends Object {
    static fromIndexedFrameSlot(paramdesc: FrameDescriptor, paramindex: number): JSFrameSlot;
    static isAllowedIdentifierType(paramidentifier: Object): boolean;
    constructor(index: number, identifier: Object, flags: number, kind: FrameSlotKind)
    readonly flags: number;
    readonly identifier: Object;
    readonly index: number;
    readonly info: Object;
    readonly kind: FrameSlotKind;
    readonly mappedParameterIndex: number;
    equals(obj: Object | null): boolean;
    getFlags(): number;
    getIdentifier(): Object;
    getIndex(): number;
    getInfo(): Object;
    getKind(): FrameSlotKind;
    getMappedParameterIndex(): number;
    hasBeenDeclared(): boolean;
    hashCode(): number;
    setHasBeenDeclared(declared: boolean): void;
    setMappedParameterIndex(mappedParameterIndex: number): void;
    toString(): string;
}