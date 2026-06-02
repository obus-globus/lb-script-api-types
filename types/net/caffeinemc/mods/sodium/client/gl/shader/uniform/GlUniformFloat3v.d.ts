import type { GlUniform } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniform.d.ts'
export class GlUniformFloat3v extends GlUniform<number[]> {
    constructor(arg0: number)
    set(arg0: number, arg1: number, arg2: number): void;
    set(arg0: number[]): void;
}