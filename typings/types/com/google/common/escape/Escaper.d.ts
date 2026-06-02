import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Escaper extends Object {
    constructor()
    // private asFunction: (param0: string) => string;
    asFunction(): (param0: string) => string;
    escape(string: string): string;
}