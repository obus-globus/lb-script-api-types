import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PreInitContextHostLanguage extends TruffleLanguage<Object> {
    constructor()
    createContext(env: TruffleLanguage$Env): Object;
}