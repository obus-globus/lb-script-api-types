import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class EnglishEnums extends Object {
    static valueOf<T extends Enum<T>>(paramenumType: Class<T>, paramname: string): T;
    static valueOf<T extends Enum<T>>(paramenumType: Class<T>, paramname: string, paramdefaultValue: T): T;
    private constructor()
}