import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSTags$ObjectAllocationTag extends Tag {
    static findProvidedTag(paramlanguage: LanguageInfo, paramtagId: string): Class<Object>;
    static getIdentifier(paramtag: Class<Object>): string;
    private constructor()
}