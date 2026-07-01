import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { ProgramSet } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSet.d.ts'
import type { ProgramDirectives } from '../../../../../net/irisshaders/iris/shaderpack/properties/ProgramDirectives.d.ts'
import type { ShaderProperties } from '../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export class ProgramSource extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: ProgramSet, arg7: ShaderProperties, arg8: BlendModeOverride)
    readonly directives: ProgramDirectives;
    readonly fragmentSource: string;
    readonly geometrySource: string;
    readonly name: string;
    readonly parent: ProgramSet;
    readonly tessControlSource: string;
    readonly tessEvalSource: string;
    readonly vertexSource: string;
    getDirectives(): ProgramDirectives;
    getFragmentSource(): Optional<string>;
    getGeometrySource(): Optional<string>;
    getName(): string;
    getParent(): ProgramSet;
    getTessControlSource(): Optional<string>;
    getTessEvalSource(): Optional<string>;
    getVertexSource(): Optional<string>;
    isValid(): boolean;
    requireValid(): Optional<ProgramSource>;
    withDirectiveOverride(arg0: ProgramDirectives): ProgramSource;
}