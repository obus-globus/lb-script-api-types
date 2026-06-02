import type { Module } from '../../java/lang/Module.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class NamedPackage extends Object {
    constructor(arg0: string, arg1: Module)
    // private module: Module;
    // private name: string;
    location(): URI;
    module(): Module;
    packageName(): string;
}