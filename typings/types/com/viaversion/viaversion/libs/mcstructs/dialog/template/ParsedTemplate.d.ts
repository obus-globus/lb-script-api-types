import type { StringTemplate } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/template/StringTemplate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ParsedTemplate extends Object {
    constructor(arg0: string, arg1: StringTemplate)
    readonly parsed: StringTemplate;
    readonly raw: string;
    apply(arg0: { [key: string]: string }): string;
    equals(arg0: Object | null): boolean;
    getParsed(): StringTemplate;
    getRaw(): string;
    hashCode(): number;
    toString(): string;
}