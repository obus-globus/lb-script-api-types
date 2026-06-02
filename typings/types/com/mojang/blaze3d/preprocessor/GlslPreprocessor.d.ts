import type { GlslPreprocessor$Context } from '../../../../com/mojang/blaze3d/preprocessor/GlslPreprocessor$Context.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
export abstract class GlslPreprocessor extends Object {
    static injectDefines(paramsource: string, paramdefines: ShaderDefines): string;
    constructor()
    applyImport(isRelative: boolean, path: string): string;
    process(source: string): string[];
    // private processImports(source: string, context: GlslPreprocessor$Context, parentPath: string): string[];
    // private processVersions(source: string, context: GlslPreprocessor$Context): string;
    // private setVersion(source: string, version: number): string;
}