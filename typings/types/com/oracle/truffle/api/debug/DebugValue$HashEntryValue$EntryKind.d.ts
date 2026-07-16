import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DebugValue$HashEntryValue$EntryKind extends Enum<DebugValue$HashEntryValue$EntryKind> {
    static KEY: DebugValue$HashEntryValue$EntryKind;
    static VALUE: DebugValue$HashEntryValue$EntryKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DebugValue$HashEntryValue$EntryKind;
    static values(): DebugValue$HashEntryValue$EntryKind[];
    private constructor()
    name(): "KEY" | "VALUE";
}