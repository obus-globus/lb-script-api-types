import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$ContextReference } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextReference.d.ts'
import type { TruffleLanguage$LanguageReference } from '../../../../com/oracle/truffle/api/TruffleLanguage$LanguageReference.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { PolyglotThreadInfo } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadInfo.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotFastThreadLocals extends Object {
    static cleanup(paramthreadLocals: Object[]): void;
    static createContextReference<C extends unknown>(paramlanguage: Class<TruffleLanguage<C>>): TruffleLanguage$ContextReference<C>;
    static createLanguageReference<C extends TruffleLanguage<Object>>(paramlanguage: Class<TruffleLanguage<Object>>): TruffleLanguage$LanguageReference<C>;
    static enter(paramthreadInfo: PolyglotThreadInfo): Object[];
    static enterLanguage(paramlanguage: PolyglotLanguageInstance): Object;
    static enterLayer(paramroot: RootNode): Object;
    static getContext(paramlayer: PolyglotSharingLayer): PolyglotContextImpl;
    static getContextWithEngine(paramengine: PolyglotEngineImpl): PolyglotContextImpl;
    static getContextWithNode(paramnode: Node): PolyglotContextImpl;
    static getCurrentThreadContextThreadLocals(paramlayer: PolyglotSharingLayer): Object[];
    static getCurrentThreadContextThreadLocalsEngine(paramengine: PolyglotEngineImpl): Object[];
    static getLanguage(paramnode: Node, paramindex: number, paramlanguageClass: Class<Object>): TruffleLanguage<Object>;
    static getLanguageContext(paramnode: Node, paramindex: number): Object;
    static leave(paramprev: Object[]): void;
    static leaveLanguage(paraminstance: PolyglotLanguageInstance, paramprev: Object): void;
    static leaveLayer(paramprev: Object): void;
    static needsEnter(paramcontext: PolyglotContextImpl): boolean;
    constructor()
}