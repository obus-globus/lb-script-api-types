import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeClassInitialization extends Object {
    static initializeAtBuildTime(...paramclasses: Class<Object>[]): void;
    static initializeAtBuildTime(...parampackages: string[]): void;
    static initializeAtRunTime(...paramclasses: Class<Object>[]): void;
    static initializeAtRunTime(...parampackages: string[]): void;
    private constructor()
}