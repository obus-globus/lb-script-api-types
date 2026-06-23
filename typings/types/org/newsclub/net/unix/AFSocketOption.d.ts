import type { Class } from '../../../../java/lang/Class.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AFSocketOption<T extends unknown> extends Object implements SocketOption<T> {
    constructor(arg0: string, arg1: Class<T>, arg2: number, arg3: number)
    // private level: number;
    // private name: string;
    // private optionName: number;
    // private type: Class<T>;
    level(): number;
    name(): string;
    optionName(): number;
    toString(): string;
    type(): Class<T>;
}