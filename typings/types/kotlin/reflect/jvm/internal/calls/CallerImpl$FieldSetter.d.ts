import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CallerImpl } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl.d.ts'
import type { CallerImpl$Companion } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl$Companion.d.ts'
export class CallerImpl$FieldSetter extends CallerImpl<Field> {
    static Companion: CallerImpl$Companion;
    protected constructor(field: Field, notNull: boolean, requiresInstance: boolean)
    // private notNull: boolean;
    // private requiresInstance: boolean;
    call(args: (Object | null)[]): Object | null;
    checkArguments(args: (Object | null)[]): void;
    checkArguments(argsCount: number): void;
}