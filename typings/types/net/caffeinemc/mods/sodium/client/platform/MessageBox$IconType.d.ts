import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MessageBox$IconType extends Enum<MessageBox$IconType> {
    static ERROR: MessageBox$IconType;
    static INFO: MessageBox$IconType;
    static WARNING: MessageBox$IconType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MessageBox$IconType;
    static values(): MessageBox$IconType[];
    private constructor()
    name(): "INFO" | "WARNING" | "ERROR";
}