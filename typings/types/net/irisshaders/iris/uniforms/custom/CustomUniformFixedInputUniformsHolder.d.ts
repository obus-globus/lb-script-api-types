import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../kroppeb/stareval/function/Type.d.ts'
import type { CachedUniform } from '../../../../../net/irisshaders/iris/uniforms/custom/cached/CachedUniform.d.ts'
export class CustomUniformFixedInputUniformsHolder extends Object {
    constructor(arg0: { [key: string]: CachedUniform })
    // private inputVariables: { [key: string]: CachedUniform };
    containsKey(arg0: string): boolean;
    getAll(): E[];
    getType(arg0: string): Type;
    getUniform(arg0: string): CachedUniform;
    updateAll(): void;
}