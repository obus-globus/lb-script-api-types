import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RuntimeClassInitializationSupport extends Object{
    initializeAtBuildTime(aClass: Class<Object>, reason: string): void;
    initializeAtBuildTime(name: string, reason: string): void;
    initializeAtRunTime(aClass: Class<Object>, reason: string): void;
    initializeAtRunTime(name: string, reason: string): void;
    rerunInitialization(aClass: Class<Object>, reason: string): void;
    rerunInitialization(name: string, reason: string): void;
}