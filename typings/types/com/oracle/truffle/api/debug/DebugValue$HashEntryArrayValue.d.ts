import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebugValue$HeapValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue$HeapValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugValue$HashEntryArrayValue extends DebugValue$HeapValue {
    constructor(session: DebuggerSession, preferredLanguage: LanguageInfo, name: string, hashMap: Object, value: Object)
    // private hashMap: Object;
    getArray(): DebugValue[];
}