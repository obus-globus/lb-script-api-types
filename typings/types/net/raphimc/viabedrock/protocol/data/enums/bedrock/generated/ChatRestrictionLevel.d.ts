import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ChatRestrictionLevel extends Enum<ChatRestrictionLevel> {
    static Disabled: ChatRestrictionLevel;
    static Dropped: ChatRestrictionLevel;
    static None: ChatRestrictionLevel;
    static getByName(paramarg0: string): ChatRestrictionLevel;
    static getByName(paramarg0: string, paramarg1: ChatRestrictionLevel): ChatRestrictionLevel;
    static getByValue(paramarg0: number): ChatRestrictionLevel;
    static getByValue(paramarg0: number, paramarg1: ChatRestrictionLevel): ChatRestrictionLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ChatRestrictionLevel;
    static values(): ChatRestrictionLevel[];
    private constructor(arg2: number)
    private constructor(arg2: ChatRestrictionLevel)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Dropped" | "Disabled";
}