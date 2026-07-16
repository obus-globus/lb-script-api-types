import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Dialog$ModalExclusionType extends Enum<Dialog$ModalExclusionType> {
    static APPLICATION_EXCLUDE: Dialog$ModalExclusionType;
    static NO_EXCLUDE: Dialog$ModalExclusionType;
    static TOOLKIT_EXCLUDE: Dialog$ModalExclusionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Dialog$ModalExclusionType;
    static values(): Dialog$ModalExclusionType[];
    private constructor()
    name(): "NO_EXCLUDE" | "APPLICATION_EXCLUDE" | "TOOLKIT_EXCLUDE";
}