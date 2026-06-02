import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EducationUriResource extends Record {
    constructor(buttonName: string, linkUri: string)
    // private buttonName: string;
    // private linkUri: string;
    buttonName(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    linkUri(): string;
    toString(): string;
}