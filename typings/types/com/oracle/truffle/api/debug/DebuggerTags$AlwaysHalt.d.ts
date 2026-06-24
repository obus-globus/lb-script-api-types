import type { DebuggerTags } from '../../../../../com/oracle/truffle/api/debug/DebuggerTags.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class DebuggerTags$AlwaysHalt extends Tag {
    static findProvidedTag(paramlanguage: LanguageInfo, paramtagId: string): Class<Tag>;
    static getIdentifier(paramtag: Class<Tag>): string;
    private constructor(null_: DebuggerTags)
}