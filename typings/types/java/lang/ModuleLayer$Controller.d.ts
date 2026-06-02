import type { Module } from '../../java/lang/Module.d.ts'
import type { ModuleLayer } from '../../java/lang/ModuleLayer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ModuleLayer$Controller extends Object {
    constructor(arg0: ModuleLayer)
    // private layer: ModuleLayer;
    addExports(arg0: Module, arg1: string, arg2: Module): ModuleLayer$Controller;
    addOpens(arg0: Module, arg1: string, arg2: Module): ModuleLayer$Controller;
    addReads(arg0: Module, arg1: Module): ModuleLayer$Controller;
    enableNativeAccess(arg0: Module): ModuleLayer$Controller;
    // private ensureInLayer(arg0: Module): void;
    layer(): ModuleLayer;
}