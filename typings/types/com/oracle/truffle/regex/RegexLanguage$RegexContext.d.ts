import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexLanguage$RegexContext extends Object {
    static get(paramnode: Node): RegexLanguage$RegexContext;
    constructor(env: TruffleLanguage$Env)
    readonly env: TruffleLanguage$Env;
    getEnv(): TruffleLanguage$Env;
    patchContext(patchedEnv: TruffleLanguage$Env): void;
}