import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MessagePattern$ArgType extends Enum<MessagePattern$ArgType> {
    static CHOICE: MessagePattern$ArgType;
    static NONE: MessagePattern$ArgType;
    static PLURAL: MessagePattern$ArgType;
    static SELECT: MessagePattern$ArgType;
    static SELECTORDINAL: MessagePattern$ArgType;
    static SIMPLE: MessagePattern$ArgType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MessagePattern$ArgType;
    static values(): MessagePattern$ArgType[];
    private constructor()
    hasPluralStyle(): boolean;
    name(): "NONE" | "SIMPLE" | "CHOICE" | "PLURAL" | "SELECT" | "SELECTORDINAL";
}