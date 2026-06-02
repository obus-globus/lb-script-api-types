import type { RootCallTarget } from '../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { Frame } from '../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleStackTraceElement extends Object {
    static create(paramlocation: Node, paramtarget: RootCallTarget, paramframe: Frame): TruffleStackTraceElement;
    static create(paramlocation: Node, paramtarget: RootCallTarget, paramframe: Frame, parambytecodeIndex: number): TruffleStackTraceElement;
    constructor(location: Node, target: RootCallTarget, frame: Frame, bytecodeIndex: number)
    readonly bytecodeIndex: number;
    readonly frame: Frame;
    readonly location: Node;
    readonly target: RootCallTarget;
    getBytecodeIndex(): number;
    getFrame(): Frame;
    getGuestObject(): Object;
    getInstrumentableLocation(): Node;
    getLocation(): Node;
    getTarget(): RootCallTarget;
    hasBytecodeIndex(): boolean;
    toString(): string;
}