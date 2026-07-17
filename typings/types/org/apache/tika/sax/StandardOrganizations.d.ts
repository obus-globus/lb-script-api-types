import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardOrganizations extends Object {
    static getOrganizations(): JavaMap<string, string>;
    static getOrganzationsRegex(): string;
    constructor()
}