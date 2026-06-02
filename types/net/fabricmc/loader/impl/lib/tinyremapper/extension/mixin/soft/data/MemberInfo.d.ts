import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { TrMember$MemberType } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
export class MemberInfo extends Object {
    static isDynamic(paramarg0: string): boolean;
    static isRegex(paramarg0: string): boolean;
    static parse(paramarg0: string): MemberInfo;
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    readonly desc: string;
    readonly name: string;
    readonly owner: string;
    readonly quantifier: string;
    // private formattedDesc(): string;
    getDesc(): string;
    getName(): string;
    getOwner(): string;
    getQuantifier(): string;
    getType(): TrMember$MemberType;
    isFullyQualified(): boolean;
    toString(): string;
}