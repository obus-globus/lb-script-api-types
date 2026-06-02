import type { BreakException } from '../../../../../../com/oracle/truffle/js/nodes/control/BreakException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BreakTarget extends Object {
    static forLabel(paramlabel: string, paramid: number): BreakTarget;
    static forSwitch(): BreakTarget;
    constructor(label: string, id: number, breakException: BreakException)
    readonly breakException: BreakException;
    readonly id: number;
    readonly label: Object;
    getBreakException(): BreakException;
    getId(): number;
    getLabel(): Object;
}