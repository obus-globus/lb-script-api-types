import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ChatPreferences extends Record {
    constructor(textCommunication: string)
    // private textCommunication: string;
    /*not mapped: */ textCommunication(): string;
    component1(): string;
    copy(textCommunication: string): ChatPreferences;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}