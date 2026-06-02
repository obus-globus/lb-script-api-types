import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IrisApiConfig } from '../../../../net/irisshaders/iris/api/v0/IrisApiConfig.d.ts'
export class IrisApiV0ConfigImpl extends Object implements IrisApiConfig {
    constructor()
    areShadersEnabled(): boolean;
    setShadersEnabledAndApply(arg0: boolean): void;
}