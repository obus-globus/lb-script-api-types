import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ReportType } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportType.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ReportReason extends Enum<ReportReason> {
    static ALCOHOL_TOBACCO_DRUGS: ReportReason;
    static CHILD_SEXUAL_EXPLOITATION_OR_ABUSE: ReportReason;
    static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: ReportReason;
    static HARASSMENT_OR_BULLYING: ReportReason;
    static HATE_SPEECH: ReportReason;
    static IMMINENT_HARM: ReportReason;
    static I_WANT_TO_REPORT_THEM: ReportReason;
    static NON_CONSENSUAL_INTIMATE_IMAGERY: ReportReason;
    static SELF_HARM_OR_SUICIDE: ReportReason;
    static SEXUALLY_INAPPROPRIATE: ReportReason;
    static TERRORISM_OR_VIOLENT_EXTREMISM: ReportReason;
    static getIncompatibleCategories(paramreportType: ReportType): ReportReason[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ReportReason;
    static values(): ReportReason[];
    private constructor(name: string)
    // private backendName: string;
    // private description: Component;
    // private title: Component;
    backendName(): string;
    description(): Component;
    title(): Component;
    name(): "I_WANT_TO_REPORT_THEM" | "HATE_SPEECH" | "HARASSMENT_OR_BULLYING" | "SELF_HARM_OR_SUICIDE" | "IMMINENT_HARM" | "DEFAMATION_IMPERSONATION_FALSE_INFORMATION" | "ALCOHOL_TOBACCO_DRUGS" | "CHILD_SEXUAL_EXPLOITATION_OR_ABUSE" | "TERRORISM_OR_VIOLENT_EXTREMISM" | "NON_CONSENSUAL_INTIMATE_IMAGERY" | "SEXUALLY_INAPPROPRIATE";
}