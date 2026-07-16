import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotListAndFunction<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<T extends unknown>(paramlanguageContext: PolyglotLanguageContext, paramarray: Object, paramimplementFunction: boolean, paramelementClass: Class<T>, paramelementType: Type): T[];
}