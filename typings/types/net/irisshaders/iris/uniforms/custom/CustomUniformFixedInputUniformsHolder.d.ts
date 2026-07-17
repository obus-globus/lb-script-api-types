import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../kroppeb/stareval/function/Type.d.ts'
import type { CachedUniform } from '../../../../../net/irisshaders/iris/uniforms/custom/cached/CachedUniform.d.ts'
export class CustomUniformFixedInputUniformsHolder extends Object {
    constructor(arg0: JavaMap<string, CachedUniform>)
    // private inputVariables: JavaMap<string, CachedUniform>;
    containsKey(arg0: string): boolean;
    getAll(): CachedUniform[];
    getType(arg0: string): Type;
    getUniform(arg0: string): CachedUniform;
    updateAll(): void;
}