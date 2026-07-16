import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Prompt extends Enum<Prompt> {
    static ADMIN_CONSENT: Prompt;
    static CONSENT: Prompt;
    static LOGIN: Prompt;
    static NONE: Prompt;
    static SELECT_ACCOUNT: Prompt;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Prompt;
    static values(): Prompt[];
    private constructor(arg2: string)
    // private prompt: string;
    toString(): string;
    name(): "LOGIN" | "SELECT_ACCOUNT" | "CONSENT" | "ADMIN_CONSENT" | "NONE";
}