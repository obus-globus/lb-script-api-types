import type { AlphaComposite } from '../../../java/awt/AlphaComposite.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CompositeType extends Object {
    static AlphaXor: CompositeType;
    static Any: CompositeType;
    static AnyAlpha: CompositeType;
    static Clear: CompositeType;
    static DESC_ALPHA_XOR: string;
    static DESC_ANY: string;
    static DESC_ANY_ALPHA: string;
    static DESC_CLEAR: string;
    static DESC_DST: string;
    static DESC_DST_ATOP: string;
    static DESC_DST_IN: string;
    static DESC_DST_OUT: string;
    static DESC_DST_OVER: string;
    static DESC_SRC: string;
    static DESC_SRC_ATOP: string;
    static DESC_SRC_IN: string;
    static DESC_SRC_NO_EA: string;
    static DESC_SRC_OUT: string;
    static DESC_SRC_OVER: string;
    static DESC_SRC_OVER_NO_EA: string;
    static DESC_XOR: string;
    static Dst: CompositeType;
    static DstAtop: CompositeType;
    static DstIn: CompositeType;
    static DstOut: CompositeType;
    static DstOver: CompositeType;
    static General: CompositeType;
    static OpaqueSrcOverNoEa: CompositeType;
    static Src: CompositeType;
    static SrcAtop: CompositeType;
    static SrcIn: CompositeType;
    static SrcNoEa: CompositeType;
    static SrcOut: CompositeType;
    static SrcOver: CompositeType;
    static SrcOverNoEa: CompositeType;
    static Xor: CompositeType;
    static forAlphaComposite(paramarg0: AlphaComposite): CompositeType;
    static makeUniqueID(paramarg0: string): number;
    private constructor(arg0: CompositeType, arg1: string)
    // private desc: string;
    // private next: CompositeType;
    readonly uniqueID: number;
    deriveSubType(arg0: string): CompositeType;
    equals(arg0: Object | null): boolean;
    getDescriptor(): string;
    getSuperType(): CompositeType;
    getUniqueID(): number;
    hashCode(): number;
    isDerivedFrom(arg0: CompositeType): boolean;
    toString(): string;
}