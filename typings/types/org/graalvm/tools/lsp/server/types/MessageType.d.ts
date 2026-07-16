import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MessageType extends Enum<MessageType> {
    static Error: MessageType;
    static Info: MessageType;
    static Log: MessageType;
    static Warning: MessageType;
    static get(paramintValue: number): MessageType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MessageType;
    static values(): MessageType[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Error" | "Warning" | "Info" | "Log";
}