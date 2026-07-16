import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MessagePattern$Part$Type extends Enum<MessagePattern$Part$Type> {
    static ARG_DOUBLE: MessagePattern$Part$Type;
    static ARG_INT: MessagePattern$Part$Type;
    static ARG_LIMIT: MessagePattern$Part$Type;
    static ARG_NAME: MessagePattern$Part$Type;
    static ARG_NUMBER: MessagePattern$Part$Type;
    static ARG_SELECTOR: MessagePattern$Part$Type;
    static ARG_START: MessagePattern$Part$Type;
    static ARG_STYLE: MessagePattern$Part$Type;
    static ARG_TYPE: MessagePattern$Part$Type;
    static INSERT_CHAR: MessagePattern$Part$Type;
    static MSG_LIMIT: MessagePattern$Part$Type;
    static MSG_START: MessagePattern$Part$Type;
    static REPLACE_NUMBER: MessagePattern$Part$Type;
    static SKIP_SYNTAX: MessagePattern$Part$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MessagePattern$Part$Type;
    static values(): MessagePattern$Part$Type[];
    private constructor()
    hasNumericValue(): boolean;
    name(): "MSG_START" | "MSG_LIMIT" | "SKIP_SYNTAX" | "INSERT_CHAR" | "REPLACE_NUMBER" | "ARG_START" | "ARG_LIMIT" | "ARG_NUMBER" | "ARG_NAME" | "ARG_TYPE" | "ARG_STYLE" | "ARG_SELECTOR" | "ARG_INT" | "ARG_DOUBLE";
}