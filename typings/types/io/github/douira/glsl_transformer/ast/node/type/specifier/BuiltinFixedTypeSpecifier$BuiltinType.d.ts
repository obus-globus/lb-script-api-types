import type { TokenTyped } from '../../../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { BuiltinFixedTypeSpecifier$BuiltinType$TypeKind } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/BuiltinFixedTypeSpecifier$BuiltinType$TypeKind.d.ts'
import type { BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class BuiltinFixedTypeSpecifier$BuiltinType extends Enum<BuiltinFixedTypeSpecifier$BuiltinType> implements TokenTyped {
    static ACCELERATION_STRUCTURE: BuiltinFixedTypeSpecifier$BuiltinType;
    static ATOMIC_UINT: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGE1D: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGE1DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGE2D: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGE2DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGE2DMS: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGE2DMSARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGE2DRECT: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGE3D: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGEBUFFER: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGECUBE: BuiltinFixedTypeSpecifier$BuiltinType;
    static IIMAGECUBEARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGE1D: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGE1DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGE2D: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGE2DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGE2DMS: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGE2DMSARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGE2DRECT: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGE3D: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGEBUFFER: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGECUBE: BuiltinFixedTypeSpecifier$BuiltinType;
    static IMAGECUBEARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLER1D: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLER1DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLER2D: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLER2DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLER2DMS: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLER2DMSARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLER2DRECT: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLER3D: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLERBUFFER: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLERCUBE: BuiltinFixedTypeSpecifier$BuiltinType;
    static ISAMPLERCUBEARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER1D: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER1DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER1DARRAYSHADOW: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER1DSHADOW: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER2D: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER2DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER2DARRAYSHADOW: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER2DMS: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER2DMSARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER2DRECT: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER2DRECTSHADOW: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER2DSHADOW: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLER3D: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLERBUFFER: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLERCUBE: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLERCUBEARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLERCUBEARRAYSHADOW: BuiltinFixedTypeSpecifier$BuiltinType;
    static SAMPLERCUBESHADOW: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGE1D: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGE1DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGE2D: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGE2DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGE2DMS: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGE2DMSARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGE2DRECT: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGE3D: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGEBUFFER: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGECUBE: BuiltinFixedTypeSpecifier$BuiltinType;
    static UIMAGECUBEARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLER1D: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLER1DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLER2D: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLER2DARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLER2DMS: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLER2DMSARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLER2DRECT: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLER3D: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLERBUFFER: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLERCUBE: BuiltinFixedTypeSpecifier$BuiltinType;
    static USAMPLERCUBEARRAY: BuiltinFixedTypeSpecifier$BuiltinType;
    static VOID: BuiltinFixedTypeSpecifier$BuiltinType;
    static fromToken(paramarg0: Token): BuiltinFixedTypeSpecifier$BuiltinType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BuiltinFixedTypeSpecifier$BuiltinType;
    static values(): BuiltinFixedTypeSpecifier$BuiltinType[];
    private constructor(arg2: number, arg3: BuiltinFixedTypeSpecifier$BuiltinType$TypeKind)
    private constructor(arg2: number, arg3: BuiltinFixedTypeSpecifier$BuiltinType$TypeKind, arg4: BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat)
    kind: BuiltinFixedTypeSpecifier$BuiltinType$TypeKind;
    readonly tokenType: number;
    valueFormat: BuiltinFixedTypeSpecifier$BuiltinType$ValueFormat;
    getTokenType(): number;
    name(): "VOID" | "ATOMIC_UINT" | "SAMPLER2D" | "SAMPLER3D" | "SAMPLERCUBE" | "SAMPLER2DSHADOW" | "SAMPLERCUBESHADOW" | "SAMPLER2DARRAY" | "SAMPLER2DARRAYSHADOW" | "SAMPLERCUBEARRAY" | "SAMPLERCUBEARRAYSHADOW" | "ISAMPLER2D" | "ISAMPLER3D" | "ISAMPLERCUBE" | "ISAMPLER2DARRAY" | "ISAMPLERCUBEARRAY" | "USAMPLER2D" | "USAMPLER3D" | "USAMPLERCUBE" | "USAMPLER2DARRAY" | "USAMPLERCUBEARRAY" | "SAMPLER1D" | "SAMPLER1DSHADOW" | "SAMPLER1DARRAY" | "SAMPLER1DARRAYSHADOW" | "ISAMPLER1D" | "ISAMPLER1DARRAY" | "USAMPLER1D" | "USAMPLER1DARRAY" | "SAMPLER2DRECT" | "SAMPLER2DRECTSHADOW" | "ISAMPLER2DRECT" | "USAMPLER2DRECT" | "SAMPLERBUFFER" | "ISAMPLERBUFFER" | "USAMPLERBUFFER" | "SAMPLER2DMS" | "ISAMPLER2DMS" | "USAMPLER2DMS" | "SAMPLER2DMSARRAY" | "ISAMPLER2DMSARRAY" | "USAMPLER2DMSARRAY" | "IMAGE2D" | "IIMAGE2D" | "UIMAGE2D" | "IMAGE3D" | "IIMAGE3D" | "UIMAGE3D" | "IMAGECUBE" | "IIMAGECUBE" | "UIMAGECUBE" | "IMAGEBUFFER" | "IIMAGEBUFFER" | "UIMAGEBUFFER" | "IMAGE1D" | "IIMAGE1D" | "UIMAGE1D" | "IMAGE1DARRAY" | "IIMAGE1DARRAY" | "UIMAGE1DARRAY" | "IMAGE2DRECT" | "IIMAGE2DRECT" | "UIMAGE2DRECT" | "IMAGE2DARRAY" | "IIMAGE2DARRAY" | "UIMAGE2DARRAY" | "IMAGECUBEARRAY" | "IIMAGECUBEARRAY" | "UIMAGECUBEARRAY" | "IMAGE2DMS" | "IIMAGE2DMS" | "UIMAGE2DMS" | "IMAGE2DMSARRAY" | "IIMAGE2DMSARRAY" | "UIMAGE2DMSARRAY" | "ACCELERATION_STRUCTURE";
}