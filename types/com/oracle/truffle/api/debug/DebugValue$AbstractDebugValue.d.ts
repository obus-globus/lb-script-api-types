import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DebugValue$AbstractDebugValue extends DebugValue {
    constructor(session: DebuggerSession, preferredLanguage: LanguageInfo)
    readonly session: DebuggerSession;
    as<T extends Object | number | string | boolean>(clazz: Class<T>): T;
    // private convertToPrimitive<T extends Object | number | string | boolean>(clazz: Class<T>): T;
    getSession(): DebuggerSession;
}