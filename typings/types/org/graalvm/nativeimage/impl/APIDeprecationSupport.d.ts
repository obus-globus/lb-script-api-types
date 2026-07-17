import type { Object } from '../../../../java/lang/Object.d.ts'
export class APIDeprecationSupport extends Object {
    constructor(flagValue: boolean)
    // private flagValue: boolean;
    readonly userEnabledFeaturesStarted: boolean;
    isUserEnabledFeaturesStarted(): boolean;
    printDeprecationWarning(): void;
    setUserEnabledFeaturesStarted(started: boolean): void;
}