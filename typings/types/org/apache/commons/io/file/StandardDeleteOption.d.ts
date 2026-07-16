import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { DeleteOption } from '../../../../../org/apache/commons/io/file/DeleteOption.d.ts'
export class StandardDeleteOption extends Enum<StandardDeleteOption> implements DeleteOption {
    static OVERRIDE_READ_ONLY: StandardDeleteOption;
    static overrideReadOnly(paramarg0: DeleteOption[]): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StandardDeleteOption;
    static values(): StandardDeleteOption[];
    private constructor()
    name(): "OVERRIDE_READ_ONLY";
}