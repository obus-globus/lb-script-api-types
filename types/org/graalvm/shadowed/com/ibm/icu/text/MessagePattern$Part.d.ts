import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MessagePattern$ArgType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern$ArgType.d.ts'
import type { MessagePattern$Part$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern$Part$Type.d.ts'
export class MessagePattern$Part extends Object {
    private constructor(t: MessagePattern$Part$Type, i: number, l: number, v: number)
    readonly index: number;
    readonly length: string;
    // private limitPartIndex: number;
    readonly type: MessagePattern$Part$Type;
    readonly value: number;
    equals(other: Object | null): boolean;
    getArgType(): MessagePattern$ArgType;
    getIndex(): number;
    getLength(): number;
    getLimit(): number;
    getType(): MessagePattern$Part$Type;
    getValue(): number;
    hashCode(): number;
    toString(): string;
}