import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PartyDestinationCookieIntent extends Enum<PartyDestinationCookieIntent> {
    static Notify: PartyDestinationCookieIntent;
    static OptIn: PartyDestinationCookieIntent;
    static OptOut: PartyDestinationCookieIntent;
    static getByName(paramarg0: string): PartyDestinationCookieIntent;
    static getByName(paramarg0: string, paramarg1: PartyDestinationCookieIntent): PartyDestinationCookieIntent;
    static getByValue(paramarg0: number): PartyDestinationCookieIntent;
    static getByValue(paramarg0: number, paramarg1: PartyDestinationCookieIntent): PartyDestinationCookieIntent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PartyDestinationCookieIntent;
    static values(): PartyDestinationCookieIntent[];
    private constructor(arg2: number)
    private constructor(arg2: PartyDestinationCookieIntent)
    readonly value: number;
    getValue(): number;
    name(): "Notify" | "OptIn" | "OptOut";
}