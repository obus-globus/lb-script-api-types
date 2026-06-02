import type { DebugScope } from '../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebugValue$AbstractDebugCachedValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue$AbstractDebugCachedValue.d.ts'
import type { DebugValue$HashEntryValue$EntryKind } from '../../../../../com/oracle/truffle/api/debug/DebugValue$HashEntryValue$EntryKind.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugValue$HashEntryValue extends DebugValue$AbstractDebugCachedValue {
    constructor(session: DebuggerSession, preferredLanguage: LanguageInfo, map: Object, key: Object, kind: DebugValue$HashEntryValue$EntryKind)
    // private hashMap: Object;
    // private key: Object;
    // private kind: DebugValue$HashEntryValue$EntryKind;
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
    // private setNewValue(newValue: Object): void;
    unreadableEquals(var_: DebugValue): boolean;
    unreadableHashCode(): number;
}