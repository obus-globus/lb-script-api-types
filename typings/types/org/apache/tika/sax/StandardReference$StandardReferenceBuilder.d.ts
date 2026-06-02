import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StandardReference } from '../../../../org/apache/tika/sax/StandardReference.d.ts'
export class StandardReference$StandardReferenceBuilder extends Object {
    constructor(arg0: string, arg1: string)
    // private identifier: string;
    // private mainOrganization: string;
    // private score: number;
    // private secondOrganization: string;
    // private separator: string;
    build(): StandardReference;
    setScore(arg0: number): StandardReference$StandardReferenceBuilder;
    setSecondOrganization(arg0: string, arg1: string): StandardReference$StandardReferenceBuilder;
}