import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../java/lang/Module.d.ts'
import type { ServicesCatalog$ServiceProvider } from '../../../jdk/internal/module/ServicesCatalog$ServiceProvider.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ServicesCatalog extends Object {
    static create(): ServicesCatalog;
    static getServicesCatalog(paramarg0: ClassLoader): ServicesCatalog;
    static getServicesCatalogOrNull(paramarg0: ClassLoader): ServicesCatalog;
    static putServicesCatalog(paramarg0: ClassLoader, paramarg1: ServicesCatalog): void;
    private constructor()
    // private map: { [key: string]: ServicesCatalog$ServiceProvider[] };
    addProvider(arg0: Module, arg1: Class<Object>, arg2: Class<Object>): void;
    // private addProviders(arg0: string, arg1: ServicesCatalog$ServiceProvider[]): void;
    findServices(arg0: string): ServicesCatalog$ServiceProvider[];
    register(arg0: Module): void;
}