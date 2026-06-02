import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Matcher extends Object {
    static FAIL: Matcher;
    constructor()
    descend(arg0: string, arg1: string): Matcher;
    matchesAttribute(arg0: string, arg1: string): boolean;
    matchesElement(): boolean;
    matchesText(): boolean;
}