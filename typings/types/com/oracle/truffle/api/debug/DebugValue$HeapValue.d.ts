import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebugValue$AbstractDebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue$AbstractDebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugValue$HeapValue extends DebugValue$AbstractDebugValue {
    constructor(session: DebuggerSession, preferredLanguage: LanguageInfo, name: string, value: Object)
    constructor(session: DebuggerSession, name: string, value: Object)
    readonly name: string;
    // private value: Object;
    createAsInLanguage(language: LanguageInfo): DebugValue;
    get(): Object;
    getName(): string;
    hasReadSideEffects(): boolean;
    hasWriteSideEffects(): boolean;
    isInternal(): boolean;
    isReadable(): boolean;
    isWritable(): boolean;
    set(expression: DebugValue): void;
    set(primitiveValue: Object): void;
    unreadableEquals(var_: DebugValue): boolean;
    unreadableHashCode(): number;
}