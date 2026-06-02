import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { UnsignedWord } from '../../../../../org/graalvm/word/UnsignedWord.d.ts'
export class SizeOf extends Object {
    static get(paramclazz: Class<Object>): number;
    static unsigned(paramclazz: Class<Object>): UnsignedWord;
    private constructor()
}