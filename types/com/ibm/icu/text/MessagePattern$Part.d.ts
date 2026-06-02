import type { MessagePattern$ArgType } from '../../../../com/ibm/icu/text/MessagePattern$ArgType.d.ts'
import type { MessagePattern$Part$Type } from '../../../../com/ibm/icu/text/MessagePattern$Part$Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MessagePattern$Part extends Object {
    private constructor(arg0: MessagePattern$Part$Type, arg1: number, arg2: number, arg3: number)
    readonly index: number;
    readonly length: string;
    // private limitPartIndex: number;
    readonly type: MessagePattern$Part$Type;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    getArgType(): MessagePattern$ArgType;
    getIndex(): number;
    getLength(): number;
    getLimit(): number;
    getType(): MessagePattern$Part$Type;
    getValue(): number;
    hashCode(): number;
    toString(): string;
}