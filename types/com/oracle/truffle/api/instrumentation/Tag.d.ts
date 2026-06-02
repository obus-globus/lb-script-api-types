import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Tag extends Object {
    static findProvidedTag(paramlanguage: LanguageInfo, paramtagId: string): Class<Object>;
    static getIdentifier(paramtag: Class<Object>): string;
    constructor()
}