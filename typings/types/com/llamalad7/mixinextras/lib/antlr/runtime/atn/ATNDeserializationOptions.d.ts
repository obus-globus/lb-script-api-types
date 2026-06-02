import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ATNDeserializationOptions extends Object {
    static getDefaultOptions(): ATNDeserializationOptions;
    constructor()
    readonly generateRuleBypassTransitions: boolean;
    // private readOnly: boolean;
    readonly verifyATN: boolean;
    isGenerateRuleBypassTransitions(): boolean;
    isVerifyATN(): boolean;
    makeReadOnly(): void;
}