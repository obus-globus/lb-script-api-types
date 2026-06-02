import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBOcclusionQuery extends Object {
    static GL_CURRENT_QUERY_ARB: number;
    static GL_QUERY_COUNTER_BITS_ARB: number;
    static GL_QUERY_RESULT_ARB: number;
    static GL_QUERY_RESULT_AVAILABLE_ARB: number;
    static GL_SAMPLES_PASSED_ARB: number;
    static glBeginQueryARB(paramarg0: number, paramarg1: number): void;
    static glDeleteQueriesARB(paramarg0: number): void;
    static glDeleteQueriesARB(paramarg0: number[]): void;
    static glDeleteQueriesARB(paramarg0: IntBuffer): void;
    static glEndQueryARB(paramarg0: number): void;
    static glGenQueriesARB(): number;
    static glGenQueriesARB(paramarg0: number[]): void;
    static glGenQueriesARB(paramarg0: IntBuffer): void;
    static glGetQueryObjectiARB(paramarg0: number, paramarg1: number): number;
    static glGetQueryObjectivARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetQueryObjectivARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetQueryObjectivARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetQueryObjectuiARB(paramarg0: number, paramarg1: number): number;
    static glGetQueryObjectuivARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetQueryObjectuivARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetQueryObjectuivARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetQueryiARB(paramarg0: number, paramarg1: number): number;
    static glGetQueryivARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetQueryivARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glIsQueryARB(paramarg0: number): boolean;
    static nglDeleteQueriesARB(paramarg0: number, paramarg1: number): void;
    static nglGenQueriesARB(paramarg0: number, paramarg1: number): void;
    static nglGetQueryObjectivARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetQueryObjectuivARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetQueryivARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}