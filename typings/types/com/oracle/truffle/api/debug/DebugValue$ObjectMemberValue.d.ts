import type { DebugScope } from '../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebugValue$AbstractDebugCachedValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue$AbstractDebugCachedValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugValue$ObjectMemberValue extends DebugValue$AbstractDebugCachedValue {
    constructor(session: DebuggerSession, preferredLanguage: LanguageInfo, scope: DebugScope, object: Object, member: string)
    // private member: string;
    // private object: Object;
    readonly scope: DebugScope;
    // private checkValid(): void;
    createAsInLanguage(language: LanguageInfo): DebugValue;
    getName(): string;
    getScope(): DebugScope;
    hasReadSideEffects(): boolean;
    hasWriteSideEffects(): boolean;
    isInternal(): boolean;
    isReadable(): boolean;
    isWritable(): boolean;
    readValue(): Object;
    set(value: DebugValue): void;
    set(primitiveValue: Object): void;
    unreadableEquals(var_: DebugValue): boolean;
    unreadableHashCode(): number;
}