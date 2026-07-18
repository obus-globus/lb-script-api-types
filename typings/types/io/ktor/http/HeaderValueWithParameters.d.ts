import type { HeaderValueParam } from '../../../io/ktor/http/HeaderValueParam.d.ts'
import type { HeaderValueWithParameters$Companion } from '../../../io/ktor/http/HeaderValueWithParameters$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class HeaderValueWithParameters extends Object {
    static Companion: HeaderValueWithParameters$Companion;
    constructor(content: string, parameters: HeaderValueParam[])
    // private content: string;
    // private /*not mapped: */ getContent(): string;
    readonly parameters: HeaderValueParam[];
    parameter(name: string): string | null;
    toString(): string;
}