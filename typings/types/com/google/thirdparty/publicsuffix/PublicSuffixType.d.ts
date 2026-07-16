import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PublicSuffixType extends Enum<PublicSuffixType> {
    static PRIVATE: PublicSuffixType;
    static REGISTRY: PublicSuffixType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PublicSuffixType;
    static values(): PublicSuffixType[];
    private constructor(innerNodeCode: string, leafNodeCode: string)
    // private innerNodeCode: string;
    // private leafNodeCode: string;
    getInnerNodeCode(): string;
    getLeafNodeCode(): string;
    name(): "PRIVATE" | "REGISTRY";
}