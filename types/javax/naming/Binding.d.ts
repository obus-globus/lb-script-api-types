import type { NameClassPair } from '../../javax/naming/NameClassPair.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Binding extends NameClassPair {
    constructor(arg0: string, arg1: Object)
    constructor(arg0: string, arg1: Object, arg2: boolean)
    constructor(arg0: string, arg1: string, arg2: Object)
    constructor(arg0: string, arg1: string, arg2: Object, arg3: boolean)
    // private boundObj: Object;
    getClassName(): string;
    getObject(): Object;
    setObject(arg0: Object): void;
    toString(): string;
}