import type { Completion$Type } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion$Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Completion extends Object {
    static create(paramtype: Completion$Type, paramvalue: Object): Completion;
    static forNormal(paramvalue: Object): Completion;
    static forReturn(paramvalue: Object): Completion;
    static forThrow(paramvalue: Object): Completion;
    constructor(completionType: Completion$Type, completionValue: Object)
    readonly type: Completion$Type;
    readonly value: Object;
    getType(): Completion$Type;
    getValue(): Object;
    isAbrupt(): boolean;
    isNormal(): boolean;
    isReturn(): boolean;
    isThrow(): boolean;
    toString(): string;
}