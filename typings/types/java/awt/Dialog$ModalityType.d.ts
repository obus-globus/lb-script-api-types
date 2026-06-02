import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Dialog$ModalityType extends Enum<Dialog$ModalityType> {
    static APPLICATION_MODAL: Dialog$ModalityType;
    static DOCUMENT_MODAL: Dialog$ModalityType;
    static MODELESS: Dialog$ModalityType;
    static TOOLKIT_MODAL: Dialog$ModalityType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Dialog$ModalityType;
    static values(): (Object | null)[];
    private constructor()
    name(): "MODELESS" | "DOCUMENT_MODAL" | "APPLICATION_MODAL" | "TOOLKIT_MODAL";
}