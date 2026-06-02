import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { TruffleLanguage$ParsingRequest } from '../../../../com/oracle/truffle/api/TruffleLanguage$ParsingRequest.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RegexLanguage$RegexContext } from '../../../../com/oracle/truffle/regex/RegexLanguage$RegexContext.d.ts'
import type { RegexSource } from '../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { GroupBoundaries } from '../../../../com/oracle/truffle/regex/tregex/parser/ast/GroupBoundaries.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
export class RegexLanguage extends TruffleLanguage<RegexLanguage$RegexContext> {
    static ID: string;
    static MIME_TYPE: string;
    static NAME: string;
    static get(paramnode: Node): RegexLanguage;
    constructor()
    readonly cachedGroupBoundaries: GroupBoundaries[];
    createContext(env: TruffleLanguage$Env): RegexLanguage$RegexContext;
    // private createRegexObject(source: RegexSource): Object;
    getCachedGroupBoundaries(): GroupBoundaries[];
    getScope(context: RegexLanguage$RegexContext): Object;
    getSourceOptionDescriptors(): OptionDescriptor[];
    isThreadAccessAllowed(thread: Thread, singleThreaded: boolean): boolean;
    parse(parsingRequest: TruffleLanguage$ParsingRequest): CallTarget;
    patchContext(context: RegexLanguage$RegexContext, newEnv: TruffleLanguage$Env): boolean;
}