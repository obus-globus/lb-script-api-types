import type { DebugValue$AbstractDebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue$AbstractDebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DebugValue$AbstractDebugCachedValue extends DebugValue$AbstractDebugValue {
    constructor(session: DebuggerSession, preferredLanguage: LanguageInfo)
    // private cachedValue: Object;
    get(): Object;
    readValue(): Object;
    resetCachedValue(): void;
    setCachedValue(newCachedValue: Object): void;
}