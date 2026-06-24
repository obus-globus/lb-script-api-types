import type { StringUnhasher$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringUnhasher$Config extends Object {
    private constructor()
    constructor(arg0: StringUnhasher$1)
    // private filter: (param0: string) => boolean;
    // private maxChar: string;
    // private maxSize: number;
    // private minChar: string;
    // private minSize: number;
    filter(arg0: (param0: string) => boolean): StringUnhasher$Config;
    withChars(arg0: string, arg1: string): StringUnhasher$Config;
    withSize(arg0: number, arg1: number): StringUnhasher$Config;
}