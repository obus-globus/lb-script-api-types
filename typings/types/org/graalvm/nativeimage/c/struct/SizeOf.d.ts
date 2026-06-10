import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../../../org/graalvm/word/PointerBase.d.ts'
import type { UnsignedWord } from '../../../../../org/graalvm/word/UnsignedWord.d.ts'
export class SizeOf extends Object {
    static get(paramclazz: Class<PointerBase>): number;
    static unsigned(paramclazz: Class<PointerBase>): UnsignedWord;
    private constructor()
}