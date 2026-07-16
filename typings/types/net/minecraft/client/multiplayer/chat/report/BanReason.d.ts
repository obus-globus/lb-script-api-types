import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class BanReason extends Enum<BanReason> {
    static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: BanReason;
    static DRUGS: BanReason;
    static EXTREME_VIOLENCE_OR_GORE: BanReason;
    static FALSE_REPORTING: BanReason;
    static FRAUD: BanReason;
    static GENERIC_VIOLATION: BanReason;
    static HARASSMENT_OR_BULLYING: BanReason;
    static HATE_SPEECH: BanReason;
    static HATE_TERRORISM_NOTORIOUS_FIGURE: BanReason;
    static IMMINENT_HARM_TO_PERSON_OR_PROPERTY: BanReason;
    static NUDITY_OR_PORNOGRAPHY: BanReason;
    static SEXUALLY_INAPPROPRIATE: BanReason;
    static SPAM_OR_ADVERTISING: BanReason;
    static byId(paramid: number): BanReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BanReason;
    static values(): BanReason[];
    private constructor(name: string)
    // private title: Component;
    title(): Component;
    name(): "GENERIC_VIOLATION" | "FALSE_REPORTING" | "HATE_SPEECH" | "HATE_TERRORISM_NOTORIOUS_FIGURE" | "HARASSMENT_OR_BULLYING" | "DEFAMATION_IMPERSONATION_FALSE_INFORMATION" | "DRUGS" | "FRAUD" | "SPAM_OR_ADVERTISING" | "NUDITY_OR_PORNOGRAPHY" | "SEXUALLY_INAPPROPRIATE" | "EXTREME_VIOLENCE_OR_GORE" | "IMMINENT_HARM_TO_PERSON_OR_PROPERTY";
}