import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TriState } from '../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotBindings extends Object implements TruffleObject {
    constructor(context: PolyglotContextImpl)
    constructor(languageContext: PolyglotLanguageContext)
    // private context: PolyglotContextImpl;
    // private languageContext: PolyglotLanguageContext;
    // private valueBindings: JavaMap<string, Object>;
    getBindings(): JavaMap<string, Object>;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    identityHashCode(): number;
    isIdenticalOrUndefined(other: Object): TriState;
    isMemberExisting(member: string): boolean;
    isMemberInsertable(member: string): boolean;
    readMember(member: string): Object;
    removeMember(member: string): void;
    writeMember(member: string, value: Object): void;
}