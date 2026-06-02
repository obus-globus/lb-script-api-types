import type { Module } from '../../../java/lang/Module.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ServicesCatalog$ServiceProvider extends Object {
    constructor(arg0: Module, arg1: string)
    // private module: Module;
    // private providerName: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    module(): Module;
    providerName(): string;
}