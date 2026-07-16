import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShaderPack } from '../../../../../net/irisshaders/iris/shaderpack/ShaderPack.d.ts'
import type { AbsolutePackPath } from '../../../../../net/irisshaders/iris/shaderpack/include/AbsolutePackPath.d.ts'
import type { ProgramArrayId } from '../../../../../net/irisshaders/iris/shaderpack/loading/ProgramArrayId.d.ts'
import type { ProgramId } from '../../../../../net/irisshaders/iris/shaderpack/loading/ProgramId.d.ts'
import type { ComputeSource } from '../../../../../net/irisshaders/iris/shaderpack/programs/ComputeSource.d.ts'
import type { ProgramSetInterface } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSetInterface.d.ts'
import type { ProgramSource } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { PackDirectives } from '../../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { ShaderProperties } from '../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export class ProgramSet extends Object implements ProgramSetInterface {
    constructor(arg0: AbsolutePackPath, arg1: (param0: AbsolutePackPath) => string, arg2: ShaderProperties, arg3: ShaderPack)
    // private compositePrograms: Map<ProgramArrayId, ProgramSource[]>;
    // private computePrograms: Map<ProgramArrayId, ComputeSource[][]>;
    readonly finalCompute: ComputeSource[];
    // private gbufferPrograms: Map<ProgramId, ProgramSource>;
    readonly pack: ShaderPack;
    readonly packDirectives: PackDirectives;
    readonly setup: ComputeSource[];
    readonly shadowCompute: ComputeSource[];
    get(arg0: ProgramId): Optional<ProgramSource>;
    getComposite(arg0: ProgramArrayId): ProgramSource[];
    getCompute(arg0: ProgramArrayId): ComputeSource[][];
    getFinalCompute(): ComputeSource[];
    getPack(): ShaderPack;
    getPackDirectives(): PackDirectives;
    getSetup(): ComputeSource[];
    getShadowCompute(): ComputeSource[];
    // private locateDirectives(): void;
    // private readComputeArray(arg0: AbsolutePackPath, arg1: (param0: AbsolutePackPath) => string, arg2: string, arg3: ShaderProperties): ComputeSource[];
    // private readProgramArray(arg0: AbsolutePackPath, arg1: (param0: AbsolutePackPath) => string, arg2: string, arg3: ShaderProperties): ComputeSource[];
    // private readProgramArray(arg0: AbsolutePackPath, arg1: (param0: AbsolutePackPath) => string, arg2: string, arg3: ShaderProperties, arg4: boolean): ProgramSource[];
}