import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeClassInitialization extends Object {
    static initializeAtBuildTime(paramclasses: Object | null): void;
    static initializeAtBuildTime(...parampackages: (Object | null)[]): void;
    static initializeAtRunTime(paramclasses: Object | null): void;
    static initializeAtRunTime(...parampackages: (Object | null)[]): void;
    private constructor()
}