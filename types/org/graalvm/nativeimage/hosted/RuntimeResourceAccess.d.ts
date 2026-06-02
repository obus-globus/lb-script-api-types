import type { Module } from '../../../../java/lang/Module.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeResourceAccess extends Object {
    static addResource(parammodule: Module, paramresourcePath: string): void;
    static addResource(parammodule: Module, paramresourcePath: string, paramresourceContent: number[]): void;
    static addResourceBundle(parammodule: Module, parambundleName: string): void;
    static addResourceBundle(parammodule: Module, parambaseBundleName: string, paramlocales: (Object | null)[]): void;
    private constructor()
}