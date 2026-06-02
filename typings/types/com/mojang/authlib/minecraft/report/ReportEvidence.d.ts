import type { ReportChatMessage } from '../../../../../com/mojang/authlib/minecraft/report/ReportChatMessage.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReportEvidence extends Record {
    constructor(messages: ReportChatMessage[])
    // private messages: ReportChatMessage[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    messages(): ReportChatMessage[];
    toString(): string;
}