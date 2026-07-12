import type { Class } from '../../java/lang/Class.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Messages extends Object {
    static message(paramarg0: Locale, paramarg1: string, paramarg2: Class<Object>, paramarg3: string, ...paramarg4: (Object | null)[]): string;
    private constructor()
}