import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GrammarRegex extends Object {
    constructor(regexRaw: string, groupsCountRaw: number, group: boolean)
    readonly groupsCount: number;
    readonly regex: string;
}