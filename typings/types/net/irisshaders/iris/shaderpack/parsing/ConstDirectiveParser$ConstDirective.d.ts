import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConstDirectiveParser$Type } from '../../../../../net/irisshaders/iris/shaderpack/parsing/ConstDirectiveParser$Type.d.ts'
export class ConstDirectiveParser$ConstDirective extends Object {
    constructor(arg0: ConstDirectiveParser$Type, arg1: string, arg2: string)
    readonly key: string;
    readonly type: ConstDirectiveParser$Type;
    readonly value: string;
    getKey(): string;
    getType(): ConstDirectiveParser$Type;
    getValue(): string;
    toString(): string;
}