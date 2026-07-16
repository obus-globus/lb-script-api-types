import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSFrameUtil extends Object {
    static DEFAULT_VALUE: Object;
    static IS_HOISTED_FROM_BLOCK: number;
    static NULL_MATERIALIZED_FRAME: MaterializedFrame;
    static SYMBOL_FLAG_MASK: number;
    static THIS_SLOT_ID: TruffleString;
    static castMaterializedFrame(paramframe: Object): MaterializedFrame;
    static findOptionalFrameSlotIndex(paramframeDescriptor: FrameDescriptor, paramidentifier: Object): OptionalInt;
    static findRequiredFrameSlotIndex(paramframeDescriptor: FrameDescriptor, paramidentifier: Object): number;
    static getArgumentsArray(paramframe: Frame): Object[];
    static getFlags(paramdesc: FrameDescriptor, paramindex: number): number;
    static getFlags(paramframeSlot: JSFrameSlot): number;
    static getFlagsFromInfo(paraminfo: Object): number;
    static getFunctionObject(paramframe: Frame): JSFunctionObject;
    static getFunctionObjectNoCast(paramframe: Frame): Object;
    static getParentFrame(paramframe: Frame): MaterializedFrame;
    static getPublicName(paramidentifier: Object): TruffleString;
    static getThisObj(paramframe: Frame): Object;
    static hasTemporalDeadZone(paramdesc: FrameDescriptor, paramindex: number): boolean;
    static hasTemporalDeadZone(paramframeSlot: JSFrameSlot): boolean;
    static isArguments(paramframeSlot: JSFrameSlot): boolean;
    static isClosedOver(paramframeSlot: JSFrameSlot): boolean;
    static isConst(paramdesc: FrameDescriptor, paramindex: number): boolean;
    static isConst(paramframeSlot: JSFrameSlot): boolean;
    static isHoistable(paramdesc: FrameDescriptor, paramindex: number): boolean;
    static isHoistedFromBlock(paramdesc: FrameDescriptor, paramindex: number): boolean;
    static isImportBinding(paramdesc: FrameDescriptor, paramindex: number): boolean;
    static isImportBinding(paramframeSlot: JSFrameSlot): boolean;
    static isInternal(paramdesc: FrameDescriptor, paramindex: number): boolean;
    static isInternalIdentifier(paramidentifier: Object): boolean;
    static isLet(paramdesc: FrameDescriptor, paramindex: number): boolean;
    static isLet(paramframeSlot: JSFrameSlot): boolean;
    static isParam(paramframeSlot: JSFrameSlot): boolean;
    static isPrivateName(paramframeSlot: JSFrameSlot): boolean;
    static isPrivateNameStatic(paramframeSlot: JSFrameSlot): boolean;
    static isThisSlot(paramdesc: FrameDescriptor, paramindex: number): boolean;
    static isThisSlotIdentifier(paramidentifier: Object): boolean;
    static needsPrivateBrandCheck(paramframeSlot: JSFrameSlot): boolean;
    static needsTemporalDeadZoneCheck(paramframeSlot: JSFrameSlot, paramframeLevel: number): boolean;
    private constructor()
}