import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Line$Info extends Object {
    constructor(arg0: Class<Object>)
    readonly lineClass: Class<Object>;
    getLineClass(): Class<Object>;
    matches(arg0: Line$Info): boolean;
    toString(): string;
}