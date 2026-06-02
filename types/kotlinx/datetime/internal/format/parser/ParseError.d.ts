import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
export class ParseError extends Object {
    constructor(position: number, message: Function0<string>)
    readonly message: () => string;
    readonly position: number;
}