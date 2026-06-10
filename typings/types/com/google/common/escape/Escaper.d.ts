import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Escaper extends Object {
    constructor()
    // private asFunction: (param0: Object) => boolean;
    asFunction(): (param0: Object) => boolean;
    escape(string: string): string;
}