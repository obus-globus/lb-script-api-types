import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardReference extends Object {
    private constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number)
    readonly identifier: string;
    // private mainOrganization: string;
    readonly score: number;
    // private secondOrganization: string;
    readonly separator: string;
    getIdentifier(): string;
    getMainOrganizationAcronym(): string;
    getScore(): number;
    getSecondOrganizationAcronym(): string;
    getSeparator(): string;
    setIdentifier(arg0: string): void;
    setMainOrganizationAcronym(arg0: string): void;
    setScore(arg0: number): void;
    setSecondOrganizationAcronym(arg0: string): void;
    setSeparator(arg0: string): void;
    toString(): string;
}