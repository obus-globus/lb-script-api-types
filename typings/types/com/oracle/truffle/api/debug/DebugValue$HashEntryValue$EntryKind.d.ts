import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DebugValue$HashEntryValue$EntryKind extends Enum<DebugValue$HashEntryValue$EntryKind> {
    static KEY: DebugValue$HashEntryValue$EntryKind;
    static VALUE: DebugValue$HashEntryValue$EntryKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DebugValue$HashEntryValue$EntryKind;
    static values(): DebugValue$HashEntryValue$EntryKind[];
    private constructor()
    name(): "KEY" | "VALUE";
}