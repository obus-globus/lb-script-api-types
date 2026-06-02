import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TrMember$MemberType } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
export class StringUtility extends Object {
    static addPrefix(paramarg0: string, paramarg1: string): string;
    static classDescToName(paramarg0: string): string;
    static classNameToDesc(paramarg0: string): string;
    static getTypeByDesc(paramarg0: string): TrMember$MemberType;
    static isClassDesc(paramarg0: string): boolean;
    static isClassName(paramarg0: string): boolean;
    static isFieldDesc(paramarg0: string): boolean;
    static isMethodDesc(paramarg0: string): boolean;
    static removeCamelPrefix(paramarg0: string, paramarg1: string): string;
    static removePrefix(paramarg0: string, paramarg1: string): string;
}