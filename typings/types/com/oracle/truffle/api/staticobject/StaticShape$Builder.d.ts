import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { DefaultStaticObjectFactory } from '../../../../../com/oracle/truffle/api/staticobject/DefaultStaticObjectFactory.d.ts'
import type { GeneratorClassLoaders } from '../../../../../com/oracle/truffle/api/staticobject/GeneratorClassLoaders.d.ts'
import type { ShapeGenerator } from '../../../../../com/oracle/truffle/api/staticobject/ShapeGenerator.d.ts'
import type { StaticProperty } from '../../../../../com/oracle/truffle/api/staticobject/StaticProperty.d.ts'
import type { StaticShape } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape.d.ts'
import type { StaticShape$StorageStrategy } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape$StorageStrategy.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StaticShape$Builder extends Object {
    constructor(language: TruffleLanguage<Object>)
    // private hasLongPropertyId: boolean;
    // private isActive: boolean;
    // private language: TruffleLanguage<Object>;
    // private staticProperties: JavaMap<string, StaticProperty>;
    // private storageClassName: string;
    build(): StaticShape<DefaultStaticObjectFactory>;
    // private build<T extends unknown>(sg: ShapeGenerator<T>, parentShape: StaticShape<T>): StaticShape<T>;
    build<T extends unknown>(parentShape: StaticShape<T>): StaticShape<T>;
    build<T extends unknown>(superClass: Class<Object>, factoryInterface: Class<T>): StaticShape<T>;
    // private checkStatus(): void;
    // private getOrCreateClassLoader(referenceClass: Class<Object>): GeneratorClassLoaders;
    // private getStorageStrategy(): StaticShape$StorageStrategy;
    property(property: StaticProperty, type: Class<Object>, storeAsFinal: boolean): StaticShape$Builder;
    // private setInactive(): void;
    // private validateAndGetId(property: StaticProperty): string;
}