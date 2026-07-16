import type { TokenTyped } from '../../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class StorageQualifier$StorageType extends Enum<StorageQualifier$StorageType> implements TokenTyped {
    static ATTRIBUTE: StorageQualifier$StorageType;
    static BUFFER: StorageQualifier$StorageType;
    static CALLABLE_DATA_EXT: StorageQualifier$StorageType;
    static CALLABLE_DATA_IN_EXT: StorageQualifier$StorageType;
    static CENTROID: StorageQualifier$StorageType;
    static COHERENT: StorageQualifier$StorageType;
    static CONST: StorageQualifier$StorageType;
    static DEVICECOHERENT: StorageQualifier$StorageType;
    static HIT_ATTRIBUTE_EXT: StorageQualifier$StorageType;
    static IN: StorageQualifier$StorageType;
    static INOUT: StorageQualifier$StorageType;
    static NONPRIVATE: StorageQualifier$StorageType;
    static OUT: StorageQualifier$StorageType;
    static PATCH: StorageQualifier$StorageType;
    static QUEUEFAMILYCOHERENT: StorageQualifier$StorageType;
    static RAY_PAYLOAD_EXT: StorageQualifier$StorageType;
    static RAY_PAYLOAD_IN_EXT: StorageQualifier$StorageType;
    static READONLY: StorageQualifier$StorageType;
    static RESTRICT: StorageQualifier$StorageType;
    static SAMPLE: StorageQualifier$StorageType;
    static SHARED: StorageQualifier$StorageType;
    static SUBGROUPCOHERENT: StorageQualifier$StorageType;
    static SUBROUTINE: StorageQualifier$StorageType;
    static TASKNV: StorageQualifier$StorageType;
    static UNIFORM: StorageQualifier$StorageType;
    static VARYING: StorageQualifier$StorageType;
    static VOLATILE: StorageQualifier$StorageType;
    static WORKGROUPCOHERENT: StorageQualifier$StorageType;
    static WRITEONLY: StorageQualifier$StorageType;
    static fromToken(paramarg0: Token): StorageQualifier$StorageType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StorageQualifier$StorageType;
    static values(): StorageQualifier$StorageType[];
    private constructor(arg2: number)
    readonly tokenType: number;
    getTokenType(): number;
    name(): "CONST" | "IN" | "OUT" | "INOUT" | "CENTROID" | "PATCH" | "SAMPLE" | "UNIFORM" | "VARYING" | "ATTRIBUTE" | "BUFFER" | "SHARED" | "RESTRICT" | "VOLATILE" | "COHERENT" | "READONLY" | "WRITEONLY" | "SUBROUTINE" | "DEVICECOHERENT" | "QUEUEFAMILYCOHERENT" | "WORKGROUPCOHERENT" | "SUBGROUPCOHERENT" | "NONPRIVATE" | "RAY_PAYLOAD_EXT" | "RAY_PAYLOAD_IN_EXT" | "HIT_ATTRIBUTE_EXT" | "CALLABLE_DATA_EXT" | "CALLABLE_DATA_IN_EXT" | "TASKNV";
}